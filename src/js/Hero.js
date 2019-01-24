import { TweenMax, TimelineMax } from 'gsap/TweenMax'
import { AnimationDurations } from '$js/constants';

/** 
 * Selector
 * 
 * @type { string }
 */
const Selector = {
    HERO: '#hero',
    VIDEO: '.hero__video',
    VIDEO_PLAYER: '.hero__video-player',
    VIDEO_HEADLINE: '.hero__video-headline',
    CURTAIN: '.hero__curtain'
}

/**
 * Hero Class 
 */
class Hero {
    onReady() {
        this._element = document.querySelector(Selector.HERO)
        this._video = this._element.querySelector(Selector.VIDEO)
        this._videoPlayer = this._video.querySelector(Selector.VIDEO_PLAYER)
        this._curtain = this._element.querySelector(Selector.CURTAIN)

        this.showCurtain()
    }

    showCurtain() {
        const timeline = new TimelineMax()

        timeline.add(
            TweenMax.to(this._curtain, AnimationDurations.SLOW, {
                scaleX: 1,
                ease: Expo.easeInOut,
                onComplete: () => {
                    TweenMax.set(this._video, {
                        opacity: 1
                    })

                    this._videoPlayer.play()

                    TweenMax.set(this._curtain, {
                        transformOrigin: 'right center'
                    })
                }
            })
        )

        timeline.add(
            TweenMax.to(this._curtain, AnimationDurations.SLOW, {
                scaleX: 0,
                ease: Expo.easeInOut
            })
        )
    }
}

export default new Hero