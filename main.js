const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".contain .letter-s", {
    duration: 1000,
    delay: 1000,
});
ScrollReveal().reveal(".contain img", {
    duration: 1000,
    delay: 1500,
});
ScrollReveal().reveal(".contain .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});
ScrollReveal().reveal(".contain .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});
ScrollReveal().reveal(".contain .explore", {
    duration: 1000,
    delay: 2500,
});
ScrollReveal().reveal(".contain h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
});
ScrollReveal().reveal(".contain .catalog", {
    duration: 1000,
    delay: 5000,
});
ScrollReveal().reveal(".contain .print", {
    duration: 1000,
    delay: 5500,
});
ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 7000,
});