import React, { useEffect, useRef } from 'react';

const CQCWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    // Create the script element
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-1736387577&data-host=www.cqc.org.uk&type=location';
    script.async = true;

    // Append script to container
    container.appendChild(script);

    // Setup a MutationObserver to clean up duplicate widget elements (e.g. caused by React 18 Strict Mode double-mount)
    const observer = new MutationObserver(() => {
      // Find all widgets/iframes/elements created by the script inside this container
      const widgetElements = container.querySelectorAll('.cqc-widget, iframe, .cqc-widget-inner');
      if (widgetElements.length > 1) {
        // Remove all but the first widget
        for (let i = 1; i < widgetElements.length; i++) {
          widgetElements[i].remove();
        }
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    // Cleanup on unmount
    return () => {
      observer.disconnect();
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[320px] mx-auto">
      <div 
        ref={widgetRef} 
        className="cqc-widget-container w-full min-h-[120px] flex items-center justify-center rounded-2xl overflow-hidden [&_iframe]:!border-0 [&_iframe]:!shadow-none" 
      />
    </div>
  );
};

export default CQCWidget;
