async function initMocks() {
    if (typeof window === 'undefined') {
        console.log('Mocks not enabled in server side environment');
    } else {
        const { worker } = await import('./browser');
        worker.start({
            onUnhandledRequest: 'bypass',
        });
    }
}

initMocks();

export {};
