import { toPng } from 'html-to-image';

/**
 * Captures a DOM element and downloads it as a PNG image.
 * @param element The HTMLElement to capture.
 * @param fileName The name of the downloaded file (without extension).
 */
export async function exportToPng(element: HTMLElement, fileName: string) {
    try {
        const dataUrl = await toPng(element, {
            quality: 1,
            pixelRatio: 3, // Premium resolution
            cacheBust: true,
            includeQueryParams: true,
            backgroundColor: '#0b0f19',
            style: {
                borderRadius: 'inherit',
                transform: 'none',
                transition: 'none'
            }
        });

        const link = document.createElement('a');
        link.download = `${fileName.replace(/\s+/g, '_').toLowerCase()}_profile.png`;
        link.href = dataUrl;
        link.click();
    } catch (err) {
        console.error('Failed to capture profile segment:', err);
    }
}
