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
    CURTAIN: '.hero__curtain',
    CONTENT_SIDE: '.hero__content-side',
    CONTENT_MAIN: '.hero__content-main',
    CONTENT_IMAGE_MASK: '#hero__content-image-clip-path',
    CONTENT_TEXT: '.hero__content-text'
}

/**
 * Easing
 * 
 * @type { string }
 */
const EASING = Expo.easeInOut

/**
 * Hero Class 
 */
class Hero {
    onReady() {
        this._element = document.querySelector(Selector.HERO)
        this._video = this._element.querySelector(Selector.VIDEO)
        this._videoPlayer = this._video.querySelector(Selector.VIDEO_PLAYER)
        this._videoHeadline = this._video.querySelector(Selector.VIDEO_HEADLINE)
        this._curtain = this._element.querySelector(Selector.CURTAIN)
        this._contentSide = this._element.querySelector(Selector.CONTENT_SIDE)
        this._contentMain = this._element.querySelector(Selector.CONTENT_MAIN)
        this._contentImageMask = this._element.querySelector(Selector.CONTENT_IMAGE_MASK)
        this._contentText = this._element.querySelector(Selector.CONTENT_TEXT)

        this._initialize()
        this.showCurtain()
    }

    _initialize() {
        TweenMax.set(this._contentImageMask, {
            scaleX: 0
        })
    }

    showCurtain() {
        const timeline = new TimelineMax()

        timeline.add(
            TweenMax.to(this._curtain, AnimationDurations.SLOW, {
                scaleX: 1,
                ease: EASING,
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
                ease: EASING,
                onComplete: () => {
                    this.hideHeadline()
                    this.showContent()
                }
            })
        )
    }

    showContent() {
        const timeline = new TimelineMax()

        timeline.add(
            TweenMax.to(this._contentSide, AnimationDurations.SLOW, {
                scaleX: 1,
                ease: EASING
            })
        )

        timeline.add(
            TweenMax.to(this._contentImageMask, AnimationDurations.SLOW, {
                delay: .4,
                scaleX: 1,
                ease: EASING
            }), 0
        )

        timeline.add(
            TweenMax.to(this._contentMain, AnimationDurations.SLOW, {
                scaleX: 1,
                ease: EASING
            })
        )

        timeline.add(
            TweenMax.to(this._contentText, AnimationDurations.SLOW, {
                delay: .37,
                y: 0,
                opacity: 1,
                ease: EASING
            }), 1
        )
    }

    hideHeadline() {
        TweenMax.to(this._videoHeadline, AnimationDurations.SLOW, {
            opacity: 0,
            ease: EASING
        })
    }
}

export default new Hero