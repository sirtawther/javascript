let select = document.querySelector("select")
let para = document.querySelector("p")


function setProp() {
    let choice = select.value

    switch (choice) {
        case "cat":
            para.textContent = "Cats are popular choices as pets for several reasons. Their independent and low-maintenance nature appeals to many people, especially those with busy lifestyles. Cats are known for their playful and affectionate behavior, forming strong bonds with their owners. They are relatively easy to care for, as they groom themselves and use litter boxes. Furthermore, having a cat as a pet can be therapeutic, reducing stress and providing companionship."
            break
        case "dog":
            para.textContent = "Dogs have rightfully earned the title of \"man's best friend\" due to their unwavering loyalty and companionship. Dogs come in various breeds, each offering unique qualities, making it easy for individuals to find the perfect match for their lifestyle. They thrive on human interaction, forming deep emotional connections with their owners. Dogs are also highly trainable and can be taught various tricks and commands, making them ideal for both companionship and service roles. Their enthusiastic and loving nature makes them a cherished part of countless households."
            break

        case "bird":
            para.textContent = "Birds can make delightful and entertaining pets for those who appreciate their vibrant colors, melodious songs, and intelligence. From parrots to canaries, each species brings its own charm to the household. Birds are often social creatures and can develop strong bonds with their owners. They offer the opportunity for interactive play and can be taught to mimic words and sounds. Their presence can add a cheerful ambiance to the home, making them a popular choice for pet enthusiasts seeking avian companionship."
            break
        case "fish":
            para.textContent = "Fish are captivating pets, particularly for those seeking a low-maintenance and visually stunning option. Aquariums filled with colorful fish create a soothing and serene environment, promoting relaxation and stress reduction. Watching fish swim gracefully can be mesmerizing, providing a therapeutic escape from the hustle and bustle of daily life. Fishkeeping can also be an educational experience, teaching responsibility and environmental awareness as owners learn to maintain their aquatic ecosystem."
            break
        default:
            para.textContent = ""
    }
}

select.addEventListener("change", setProp)
