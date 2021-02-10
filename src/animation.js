export const pageAnimation = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25
        },


    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25
        }
    }
};
export const titleAnim = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 1, ease: "easeOut"
        }
    }
};
export const sliderContainer = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1, transition: {
            staggerChildren: 0.15,
            ease: "easeOut"
        }
    }
}
export const slider = {
    hidden: { x: '-130%', skew: '45deg' },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: "easeOut",
            duration: 1
        }
    }
}
export const cardAnim = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1, transition: {
            duration: 2,
            staggerChildren: 0.15,
            ease: "easeOut"
        }
    }
}
export const lineAnim = {
    hidden: {
        width: "0%"
    },
    show: {
        width: "50%",
        transition: {
            duration: 0.75,
            ease: "easeOut"
        }
    }

}
export const fade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.75,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    }
};

export const swipeFade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.2,
        }
    }
};
export const swipeAnim = {
    hidden: { opacity: 1, y: -100 },
    show: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
}