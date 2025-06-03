const scrollTrack = document.getElementById('scrollTrack');
const scrollThumb = document.getElementById('scrollThumb');
const scrollTrackHeight = parseFloat(getComputedStyle(scrollTrack).height);
const scrollThumbHeight = parseFloat(getComputedStyle(scrollThumb).height);

export const scroll = (content, container, screen) => {
    
    const updateScroll = (content, container) => {
            // Get fresh dimensions each time in case they change
        const contentHeight = content.scrollHeight;
        const containerHeight = container.clientHeight;
        const scrollThumbHeight = scrollThumb.clientHeight;
        const scrollTrackHeight = (scrollTrack.clientHeight) + 2;

        const scrollableContentHeight = contentHeight - containerHeight;
        const scrollableTrackHeight = scrollTrackHeight - scrollThumbHeight;

        // Calculate thumb position based on content scroll
        const contentTop = parseInt(content.style.top) || 0;
        const thumbPosition = (-contentTop / scrollableContentHeight) * scrollableTrackHeight;
        scrollThumb.style.top = `${thumbPosition}px`;
    };

    const scrollWheel = (content, container, screen) => {

        updateScroll(content, container);

        screen.addEventListener('wheel', function(event) {

            const contentTop = parseFloat(getComputedStyle(content).top) || 0;
            const contentHeight = content.scrollHeight;
            const containerHeight = container.clientHeight;

            const scrollableContentHeight = contentHeight - containerHeight;
            const scrollableTrackHeight = (scrollTrackHeight + 2) - scrollThumbHeight;

            const scrollContentUnit = (event.deltaY) * 0.4;
            const newContentTop = Math.max(-scrollableContentHeight, Math.min(0, contentTop - scrollContentUnit));
            
            content.style.top =  newContentTop + 'px';

            console.log("Vertical scroll amount:", event.deltaY, "New content top position:", newContentTop);

            const scrollRatio = newContentTop / -scrollableContentHeight;
            const newThumbTop = scrollRatio * scrollableTrackHeight;
            scrollThumb.style.top = `${newThumbTop}px`;
            
        })

    }

    const scrollGrab = (content, container) => {
        let isDragging = false;
        let startY = 0;
        let scrollThumbStartTop = 0;


        const scrollDragging = (event) => {
            if (!isDragging) return;
            
            const contentHeight = content.scrollHeight;
            const containerHeight = container.clientHeight;
            const scrollThumbHeight = scrollThumb.clientHeight;
            const scrollTrackHeight = (scrollTrack.clientHeight) + 2;

            const scrollableContentHeight = contentHeight - containerHeight;
            const scrollableTrackHeight = scrollTrackHeight - scrollThumbHeight;

            const deltaY = event.clientY - startY;
            let newTop = scrollThumbStartTop + deltaY;
            
            // Constrain to track boundaries
            newTop = Math.max(0, Math.min(newTop, scrollableTrackHeight));
            
            // Update thumb position
            scrollThumb.style.top = `${newTop}px`;
            
            // Calculate corresponding content position
            const contentTop = (newTop / scrollableTrackHeight) * scrollableContentHeight;
            content.style.top = `${-(contentTop)}px`;
            
            console.log('Dragging - Thumb Top:', newTop, 'Content Top:', contentTop);
        };

        const stopDragging = () => {
            isDragging = false;
            document.removeEventListener('mousemove', scrollDragging);
            document.removeEventListener('mouseup', stopDragging);
            console.log('Stopped dragging');
        };

        scrollThumb.addEventListener('mousedown', (event) => {
            isDragging = true;
            startY = event.clientY;
            scrollThumbStartTop = parseInt(getComputedStyle(scrollThumb).top) || 0;
            
            document.addEventListener('mousemove', scrollDragging);
            document.addEventListener('mouseup', stopDragging);
            
            event.preventDefault();
            console.log('Started dragging');
        });


        updateScroll(content, container)

    };

    scrollWheel(content, container, screen);
    scrollGrab(content, container, screen)
}
