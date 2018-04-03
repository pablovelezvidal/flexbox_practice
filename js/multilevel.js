var submenu = document.querySelector(".multilevel-nav ul.multilevel");
submenu.parentElement.querySelector('a').addEventListener("click", function (e) {
    e.preventDefault();
    var class_list = submenu.classList;
    class_list.forEach(element => {
        if (element == "toggle-on") {
            submenu.classList.remove("toggle-on");
        } else {
            submenu.classList.add("toggle-on");
        }
    });
});


/* Repasando Callbacks */
(() => {
    var textoH3 = document.querySelector("#async-callback div.texto");
    var boton = textoH3.parentElement.querySelector("#action");

    const setTexto = texto => {
        textoH3.textContent = texto;
    }

    const checkAuth = callback => {
        setTexto("Verificando identidad...");
        setTimeout(() => {
            callback(true);
        }, 2000);
    };

    const fetchName = callback => {
        setTexto("Obteniendo el usuario...");
        setTimeout(() => {
            callback({nombre : "Pablo Andres Velez Vidal"});
        }, 2000);
    }

    boton.addEventListener("click", () => {
        checkAuth(auth => {
            if (auth) {
                fetchName(user => {
                    setTexto(user.nombre);
                }) 
            }
        });
    });
})();

/* Repasando Promises */
(() => {
    var textoH3 = document.querySelector("#async-promises div.texto");
    var boton = textoH3.parentElement.querySelector("#action");

    const setTexto = texto => {
        textoH3.textContent = texto;
    }

    const checkAuth = () => {
        return new Promise((resolve, reject) => {
            setTexto("Verificando identidad...");
            setTimeout(() => {
                resolve(true);
            }, 2000);
        })

    };

    const fetchName = () => {
        return new Promise((resolve, reject) => {
            setTexto("Obteniendo el usuario...");
            setTimeout(() => {
                resolve({nombre : "Pablo Andres Velez Vidal"});
            }, 2000);
        })
    }

    boton.addEventListener("click", () => {
        checkAuth()
        .then( auth => {
            if (auth) {
                return fetchName();
            }
        })
        .then( user => {
            setTexto(user.nombre);
        });
    });
})();

