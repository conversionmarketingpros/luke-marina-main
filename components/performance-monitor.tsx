"use client"

import { useEffect } from "react"

interface PerformanceMetrics {
  fid?: number
  lcp?: number
  cls?: number
  ttfb?: number
  fcp?: number
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const metrics: PerformanceMetrics = {}
    const observers: PerformanceObserver[] = []

    try {
      // Time to First Byte (TTFB)
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      if (navigation) {
        metrics.ttfb = navigation.responseStart - navigation.fetchStart
        console.log("TTFB:", metrics.ttfb, "ms")
      }

      // First Contentful Paint (FCP)
      const paintObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === "first-contentful-paint") {
            metrics.fcp = entry.startTime
            console.log("FCP:", metrics.fcp, "ms")
          }
        }
      })
      paintObserver.observe({ entryTypes: ["paint"] })
      observers.push(paintObserver)

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const fid = entry.processingStart - entry.startTime
          metrics.fid = fid
          console.log("FID:", fid, "ms")
          
          // Warn if FID is poor (> 100ms)
          if (fid > 100) {
            console.warn("Poor FID detected:", fid, "ms - Consider optimizing JavaScript")
          }
        }
      })
      fidObserver.observe({ entryTypes: ["first-input"] })
      observers.push(fidObserver)

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries()
        const lastEntry = entries[entries.length - 1]
        metrics.lcp = lastEntry.startTime
        console.log("LCP:", lastEntry.startTime, "ms")
        
        // Warn if LCP is poor (> 2500ms)
        if (lastEntry.startTime > 2500) {
          console.warn("Poor LCP detected:", lastEntry.startTime, "ms - Consider optimizing images and reducing server response time")
        }
      })
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
      observers.push(lcpObserver)

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        }
        metrics.cls = clsValue
        console.log("CLS:", clsValue)
        
        // Warn if CLS is poor (> 0.1)
        if (clsValue > 0.1) {
          console.warn("Poor CLS detected:", clsValue, "- Consider adding size attributes to images and avoiding dynamic content insertion")
        }
      })
      clsObserver.observe({ entryTypes: ["layout-shift"] })
      observers.push(clsObserver)

      // Resource loading performance
      const resourceObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const resource = entry as PerformanceResourceTiming
          if (resource.name.includes("/images/")) {
            const loadTime = resource.responseEnd - resource.startTime
            
            // Track slow loading images (> 1 second)
            if (loadTime > 1000) {
              console.warn("Slow loading image detected:", resource.name, loadTime, "ms")
            }
          }
        }
      })
      resourceObserver.observe({ entryTypes: ["resource"] })
      observers.push(resourceObserver)

      // Memory usage monitoring (if available)
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory
        const memoryUsage = {
          used: Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memoryInfo.jsHeapSizeLimit / 1024 / 1024)
        }
        console.log("Memory usage:", memoryUsage, "MB")
        
        // Warn if memory usage is high
        if (memoryUsage.used > 50) {
          console.warn("High memory usage detected:", memoryUsage.used, "MB")
        }
      }

      // Track page load complete
      const handleLoad = () => {
        const loadTime = performance.now()
        console.log("Page load complete:", Math.round(loadTime), "ms")
        
        // Summary of all metrics
        setTimeout(() => {
          console.log("Performance Summary:", {
            TTFB: metrics.ttfb ? Math.round(metrics.ttfb) + "ms" : "N/A",
            FCP: metrics.fcp ? Math.round(metrics.fcp) + "ms" : "N/A",
            LCP: metrics.lcp ? Math.round(metrics.lcp) + "ms" : "N/A",
            FID: metrics.fid ? Math.round(metrics.fid) + "ms" : "N/A",
            CLS: metrics.cls ? metrics.cls.toFixed(3) : "N/A",
            LoadTime: Math.round(loadTime) + "ms"
          })
        }, 2000) // Wait 2 seconds for all metrics to be collected
      }

      if (document.readyState === "complete") {
        handleLoad()
      } else {
        window.addEventListener("load", handleLoad)
      }

      return () => {
        observers.forEach(observer => observer.disconnect())
        window.removeEventListener("load", handleLoad)
      }

    } catch (error) {
      console.warn("Performance monitoring error:", error)
    }
  }, [])

  return null
}

// Helper function to send metrics to analytics (can be enabled later)
// function sendToAnalytics(metricName: string, value: number) {
//   // Example: Send to Google Analytics 4
//   if (typeof gtag !== 'undefined') {
//     gtag('event', 'web_vital', {
//       event_category: 'performance',
//       event_label: metricName,
//       value: Math.round(value),
//       non_interaction: true,
//     })
//   }
// }
