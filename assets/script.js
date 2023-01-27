const extendedAlphabet = "ABCDEFGHIJKLMNOPQRSTVWXYZ_/#@";
const h1Tags = document.querySelectorAll("h1");


h1Tags.forEach(h1 => {
    h1.onmouseover = event => {
        let iteration = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
            .map((character, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }
                return extendedAlphabet[Math.floor(Math.random() * 29)];
            })
            .join("");

            if (iteration > event.target.dataset.value.length) {
                clearInterval(interval);
            };

            iteration += 1/3;
        }, 20);
    }
});