let position = 1;

let move = n => {
    main(position += n)
}

let main = n => {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    n = n > slides.length ? 1 : n;
    n = n < 1 ? slides.length : n;
    position = n;
    for (i = 0; i < slides.length; i++) {
        slides[i].display = "none";
        slides[i].classList.remove("active")
        dots[i].classList.remove("active")

    }
    slides[n - 1].classList.add("active")
    dots[n - 1].classList.add("active")
    let header = document.querySelector(".header");
    header.innerHTML = n +"/5";
}

main(position);