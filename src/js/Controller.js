import Hero from '$js/Hero';

/**
 * Controller Class
 */
class Controller {
    /**
     * Handles the 'ready' event
     */
    onReady() {
        Hero.onReady()
    }
}

export default new Controller