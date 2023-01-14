const data = {
    yo: [
        {
            es_title: "Mio",
            ar_title: "Diali",
            es_example: "Libro mio",
            ar_example: "Ktab diali",
            gender: 'M',
            examples: [
                {
                    es: 'Este telefono es mio',
                    ar: 'Had tilifon diali'
                },
                {
                    es: 'No! no es mio',
                    ar: 'La! la mashi diali'
                },
                {
                    es: 'El mio esta en la mochila',
                    ar: 'Diali kayn fe shkara'
                }
            ]
        },
        {
            es_title: "Mia",
            ar_title: "Dialti",
            es_example: "Camisa mia",
            ar_example: "9amija dialti",
            gender: 'F',
            examples: [
                {
                    es: 'Esta escoba es mia',
                    ar: 'Had shtaba dialti'
                },
                {
                    es: 'No! no es mia',
                    ar: 'La! la mashi dialti'
                },
                {
                    es: 'La mia esta en el cuarto',
                    ar: 'Dialti kayna fe lbit'
                }
            ]
        },
        {
            es_title: "Mios",
            ar_title: "Diawli",
            es_example: "Libros mios",
            ar_example: "Ktub diawli",
            gender: 'M',
            examples: [
                {
                    es: 'Estos libros son mios',
                    ar: 'Had lektub diawli'
                },
                {
                    es: 'No! no son mios',
                    ar: 'La! la mashi diawli'
                },
                {
                    es: 'Los mios estan en el closet',
                    ar: 'Diawli kaynin fe lmariu'
                }
            ]
        },
        {
            es_title: "Mias",
            ar_title: "Diawli",
            es_example: "Camisas mias",
            ar_example: "9wamej diawli",
            gender: 'F',
            examples: [
                {
                    es: 'Estas medias son mias',
                    ar: 'Had t9asher diawli'
                },
                {
                    es: 'No! no son mias',
                    ar: 'La! la mashi diawli'
                },
                {
                    es: 'Las mias estan en el closet',
                    ar: 'Diawli kaynin fe lmariu'
                }
            ],
            tooltip: "9wamej es plural de 9amija. se pronuncia 9wamj sin la e"
        },
        {
            es_title: "Mi",
            ar_title: "i",
            es_example: "Mi libro",
            ar_example: "Ktab i",
            gender: 'M',
            examples: [
                {
                    es: 'Mi telefono es nuevo',
                    ar: 'Tilifoni jdid'
                },
                {
                    es: 'Este es mi libro',
                    ar: 'Hada ktabi'
                }
            ],
            tooltip: "Se aumenta la 'i' al final"
        },
        {
            es_title: "Mi",
            ar_title: "ti",
            es_example: "Mi camisa",
            ar_example: "9amij ti",
            gender: 'F',
            examples: [
                {
                    es: 'Me duele mi rodilla',
                    ar: 'Kaderni rkubti'
                }
            ],
            tooltip: "La mayoria de las palabras femininas terminan con 'a' al final, y cuando se aumenta 'ti' se elimina la 'a' "
        },
        {
            es_title: "Mis",
            ar_title: "i",
            es_example: "Mis libros",
            ar_example: "Ktub i",
            gender: 'F',
            examples: [
                {
                    es: 'cepillo mis dientes en la mañana',
                    ar: 'Kan7uk snani f sba7'
                }
            ],
        },
        {
            es_title: "Mis",
            ar_title: "i",
            es_example: "Mis camisas",
            ar_example: "9wamej i",
            gender: 'F',
            examples: [
                {
                    es: 'Viste mis gafas ?',
                    ar: 'Shefti ndadri ?'
                }
            ],
            tooltip: "9wamej es plural de 9amija. se pronuncia 9wamj sin la e"
        },
        {
            es_title: "Conmigo",
            ar_title: "m3aya",
            es_example: "Ven conmigo !",
            ar_example: "Aji m3aya !",
            gender: 'F',
            examples: [
                {
                    es: 'Quieres jugar conmigo ?',
                    ar: 'Bghiti tel3eb m3aya ?'
                },
                {
                    es: 'Jango esta comiendo conmigo',
                    ar: 'Jango kayakul m3aya'
                }
            ],
        },

    ],

    tu: [
        {
            es_title: "Tuyo",
            ar_title: "Dialek",
            es_example: "Libro tuyo",
            ar_example: "Ktab dialek",
            gender: 'M',
            examples: [
                {
                    es: 'Este libro es tuyo',
                    ar: 'Had lktab dialek'
                }
            ]
        },
        {
            es_title: "Tuya",
            ar_title: "Dialtek",
            es_example: "Camisa tuya",
            ar_example: "9amija dialtek",
            gender: 'F',
            examples: [
                {
                    es: 'La mochila negra no es tuya',
                    ar: 'Shkara lka7la mashi dialtek'
                }
            ]
        },
        {
            es_title: "Tuyos",
            ar_title: "Diawlek",
            es_example: "Libros tuyos",
            ar_example: "Ktub diawlek",
            gender: 'M',
            examples: [
                {
                    es: 'Esos perros son tuyos ?',
                    ar: 'Haduk leklab diawlek ?'
                }
            ]
        },
        {
            es_title: "Tuyas",
            ar_title: "Diawlek",
            es_example: "Camisas tuyas",
            ar_example: "9wamej diawlek",
            gender: 'F',
            examples: [
                {
                    es: 'Estas gatitas no son tuyas',
                    ar: 'Had lmchichat machi diawlek'
                }
            ],
            tooltip: "9wamej es plural de 9amija. se pronuncia 9wamj sin la e"
        },
        {
            es_title: "Tu",
            ar_title: "k",
            es_example: "Tu libro",
            ar_example: "Ktab k",
            gender: 'M',
            examples: [
                {
                    es: 'Prestame tu libro',
                    ar: 'Selfni ktabk'
                }
            ],
            tooltip: "Se aumenta la 'k' al final"
        },
        {
            es_title: "Tu",
            ar_title: "tk",
            es_example: "Tu camisa",
            ar_example: "9amij tk",
            gender: 'F',
            examples: [
                {
                    es: 'Tu camisa esta sucia',
                    ar: '9amijtk muskha'
                }
            ],
            tooltip: "La mayoria de las palabras femininas terminan con 'a' al final, y cuando se aumenta 'ti' se elimina la 'a' "
        },
        {
            es_title: "Tus",
            ar_title: "k",
            es_example: "Tus libros",
            ar_example: "Ktub k",
            gender: 'M',
            examples: [
                {
                    es: 'Tus libros estan sobre la mesa',
                    ar: 'Ktubk kaynin fu9 tabla'
                }
            ],
        },
        {
            es_title: "Tus",
            ar_title: "k",
            es_example: "Tus camisas",
            ar_example: "9wamej k",
            gender: 'F',
            examples: [
                {
                    es: 'donde estan tus almohadas?',
                    ar: 'Fin kaynin mkhadk?'
                }
            ],
            tooltip: "9wamej es plural de 9amija. se pronuncia 9wamj sin la e y Mkhad es plural de mkhada"
        },
        {
            es_title: "Contigo",
            ar_title: "m3ak",
            es_example: "Voy contigo ?",
            ar_example: "Nemshi m3ak ?",
            gender: 'F',
            examples: [
                {
                    es: 'Quiero que se quede contigo',
                    ar: 'Bghitu ib9a m3ak'
                },
                {
                    es: 'Jango esta contigo ?',
                    ar: 'Jango kayn m3ak ?'
                }
            ],
        },
    ],

    el: [
        {
            es_title: "Suyo",
            ar_title: "Dialu",
            es_example: "Libro suyo",
            ar_example: "Ktab dialu",
            gender: 'M',
            examples: [
                {
                    es: 'Este libro es de el',
                    ar: 'Had lktab dialu'
                }
            ],
            tooltip: "Puse es de el en vez de es suyo porque asi se dice aqui pero es lo mismo en darija (dialu)."
        },
        {
            es_title: "Suya",
            ar_title: "Dialtu",
            es_example: "Camisa suya",
            ar_example: "9amija dialtu",
            gender: 'F',
            examples: [
                {
                    es: 'La camisa amarilla es de el',
                    ar: 'L9amija safra dialtu'
                }
            ],
            tooltip: "Puse es de el en vez de es suyo porque asi se dice aqui pero es lo mismo en darija (dialu)."
        },
        {
            es_title: "Suyos",
            ar_title: "Diawlu",
            es_example: "Libros suyos",
            ar_example: "Ktub diawlu",
            gender: 'M',
            examples: [
                {
                    es: 'Los pantalones son suyos no mios',
                    ar: 'Srawel diawlu mashi diawli'
                }
            ]
        },
        {
            es_title: "Suyas",
            ar_title: "Diawlu",
            es_example: "Camisas suyas",
            ar_example: "9wamej diawlu",
            gender: 'F',
            examples: [
                {
                    es: 'Las gafas no son suyas (de el)',
                    ar: 'Ndader mashi diawlu'
                }
            ]
        },
        {
            es_title: "Su",
            ar_title: "u",
            es_example: "Su libro",
            ar_example: "Ktab u",
            gender: 'M',
            examples: [
                {
                    es: 'Encontre su telefono apagado',
                    ar: 'L9it tilifonu tafi'
                }
            ],
            tooltip: "Se aumenta la 'u' al final"
        },
        {
            es_title: "Su",
            ar_title: "tu",
            es_example: "Su camisa",
            ar_example: "9amij tu",
            gender: 'F',
            examples: [
                {
                    es: 'Su comida esta afuera',
                    ar: 'Makeltu kayna brra'
                }
            ],
            tooltip: "Las palabras femininas casi siempre terminan con 'a' al final, y cuando se aumenta 'tu' se elimina la 'a' "
        },
        {
            es_title: "Sus",
            ar_title: "u",
            es_example: "Sus libros",
            ar_example: "Ktub u",
            gender: 'F',
            examples: [
                {
                    es: 'Sus dientes son limpios',
                    ar: 'Snanu n9iyin'
                }
            ],
        },
        {
            es_title: "Sus",
            ar_title: "u",
            es_example: "Sus camisas",
            ar_example: "9wamej u",
            gender: 'F',
            examples: [
                {
                    es: 'Donde estan sus mochilas ?',
                    ar: 'Fin kaynin shkayru ?'
                }
            ],
            tooltip: "shkayr (shkayer) es plural de shkara."
        },
    ],

    ella: [
        {
            es_title: "Suyo",
            ar_title: "Dialha",
            es_example: "Libro suyo",
            ar_example: "Ktab dialha",
            gender: 'M',
            examples: [
                {
                    es: 'Este libro es de ella',
                    ar: 'Had lktab dialha'
                }
            ],
            tooltip: "Puse es de ella en vez de es suyo porque asi se dice aqui pero es lo mismo en darija (dialha)."
        },
        {
            es_title: "Suya",
            ar_title: "Dialha",
            es_example: "Camisa suya",
            ar_example: "9amija dialtha",
            gender: 'F',
            examples: [
                {
                    es: 'La camisa amarilla no es de ella (suya)',
                    ar: 'L9amija safra mashi dialha'
                }
            ]
        },
        {
            es_title: "Suyos",
            ar_title: "Diawlha",
            es_example: "Libros suyos",
            ar_example: "Ktub diawlha",
            gender: 'M',
            examples: [
                {
                    es: 'Los pantalones amarillos son de ella (suyos)',
                    ar: 'Srawel safrin diawlha'
                }
            ],
            tooltip: "Si es dificil leer diawlha aumentale la e (diawelha) :)"
        },
        {
            es_title: "Suyas",
            ar_title: "Diawlha",
            es_example: "Camisas suyas",
            ar_example: "9wamej diawlha",
            gender: 'F',
            examples: [
                {
                    es: 'Las gafas negras no son de ella (suyas)',
                    ar: 'Ndader lka7lin mashi diawlha'
                }
            ],
            tooltip: "Si es dificil leer diawlha aumentale la e (diawelha) :)"
        },
        {
            es_title: "Su",
            ar_title: "ha",
            es_example: "Su libro",
            ar_example: "Ktab ha",
            gender: 'M',
            examples: [
                {
                    es: 'Donde esta su telefono ?',
                    ar: 'Fin kayn tilifonha'
                }
            ],
            tooltip: "Se aumenta 'ha' al final"
        },
        {
            es_title: "Su",
            ar_title: "tha",
            es_example: "Su camisa",
            ar_example: "9amij tha",
            gender: 'F',
            examples: [
                {
                    es: 'Su camisa es bonita',
                    ar: '9amijtha zwina'
                }
            ],
            tooltip: "Las palabras femininas casi siempre terminan con 'a' al final, y cuando se aumenta 'tha' se elimina la 'a' "
        },
        {
            es_title: "Sus",
            ar_title: "ha",
            es_example: "Sus libros",
            ar_example: "Ktub ha",
            gender: 'F',
            examples: [
                {
                    es: 'Traeme sus libros',
                    ar: 'Jib lia ktubha'
                }
            ],
        },
        {
            es_title: "Sus",
            ar_title: "ha",
            es_example: "Sus camisas",
            ar_example: "9wamej ha",
            gender: 'F',
            examples: [
                {
                    es: 'Encontraste sus camisas ?',
                    ar: 'L9iti 9wamejha ?'
                }
            ],
            tooltip: "9wamej es plural de 9amija. se pronuncia 9wamj sin la e"
        },
    ],

    nosotros: [
        {
            es_title: "Nuestro",
            ar_title: "Dialna",
            es_example: "Libro nuestro",
            ar_example: "Ktab dialna",
            gender: 'M',
            examples: [
                {
                    es: 'El cuarto es nuestro',
                    ar: 'Lbit dialna'
                }
            ]
        },
        {
            es_title: "Nuestra",
            ar_title: "Dialna",
            es_example: "Camisa nuestra",
            ar_example: "9amija dialtna",
            gender: 'F',
            examples: [
                {
                    es: 'La casa es nuestra',
                    ar: 'Dar dialna'
                }
            ],
            tooltip: "Se puede decir dialna tambien aqui, es correcto de las dos formas 'dialna' o 'dialtna'"
        },
        {
            es_title: "Nuestros",
            ar_title: "Diawlna",
            es_example: "Libros nuestros",
            ar_example: "Ktub diawlna",
            gender: 'M',
            examples: [
                {
                    es: 'Los libros son nuestros',
                    ar: 'Lktub diawlna'
                }
            ],
            tooltip: "Si es dificil leer diawlna aumentale la e (diawelna) :)"
        },
        {
            es_title: "Nuestras",
            ar_title: "Diawlna",
            es_example: "Camisas nuestras",
            ar_example: "9wamej diawlna",
            gender: 'F',
            examples: [
                {
                    es: 'Las camisas no son nuestras',
                    ar: 'L9wamj mashi diawlna'
                }
            ],
            tooltip: "Si es dificil leer diawlha aumentale la e (diawelha) :)"
        },
        {
            es_title: "Nuestro",
            ar_title: "na",
            es_example: "Nuestro libro",
            ar_example: "Ktab na",
            gender: 'M',
            examples: [
                {
                    es: 'Nuestro cuarto es grande',
                    ar: 'Bitna kbir'
                }
            ],
            tooltip: "Se aumenta 'na' al final"
        },
        {
            es_title: "Nuestra",
            ar_title: "tna",
            es_example: "Nuestra camisa",
            ar_example: "9amij tna",
            gender: 'F',
            examples: [
                {
                    es: 'Nuestra casa es grande',
                    ar: 'Darna kbira'
                }
            ],
            tooltip: "Dar es palabra feminina pero no termina con a, esta es una de las palabras femininas especiales :)"
        },
        {
            es_title: "Nuestros",
            ar_title: "na",
            es_example: "Nuestros libros",
            ar_example: "Ktub na",
            gender: 'F',
            examples: [
                {
                    es: 'Nuestros hermanos son locos',
                    ar: 'Khutna 7em9in'
                }
            ],
        },
        {
            es_title: "Nuestras",
            ar_title: "na",
            es_example: "Nuestras camisas",
            ar_example: "9wamej na",
            gender: 'F',
            examples: [
                {
                    es: 'Que quieren nuestras gatas ?',
                    ar: 'Ash bghaw mshashna'
                }
            ],
            tooltip: "9wamej es plural de 9amija. se pronuncia 9wamj sin la e"
        },
    ],

    ustedes: [
        {
            es_title: "Suyo",
            ar_title: "Dialkum",
            es_example: "Libro suyo (de ustedes)",
            ar_example: "Ktab dialkum",
            gender: 'M',
            examples: [
                {
                    es: 'Este regalo es de ustedes ?',
                    ar: 'Had lcado dialkum ?'
                }
            ]
        },
        {
            es_title: "Suya",
            ar_title: "Dialtkum",
            es_example: "Camisa suya (de ustedes)",
            ar_example: "9amija dialtkum",
            gender: 'F',
            examples: [
                {
                    es: 'La casa no es de ustedes',
                    ar: 'Dar mashi dialtkum'
                }
            ],
            tooltip: "Se puede decir dialkum tambien aqui, es correcto de las dos formas 'dialtkum' o 'dialkum'"
        },
        {
            es_title: "Suyos",
            ar_title: "Diawlkum",
            es_example: "Libros suyos (de ustedes)",
            ar_example: "Ktub diawlkum",
            gender: 'M',
            examples: [
                {
                    es: 'Los perros son de ustedes ?',
                    ar: 'Lklab diawlkum ?'
                }
            ],
            tooltip: "Si es dificil leer diawlkum aumentale la e (diawelkum) :)"
        },
        {
            es_title: "Suyas",
            ar_title: "Diawlkum",
            es_example: "Camisas suyas",
            ar_example: "9wamej diawlkum",
            gender: 'F',
            examples: [
                {
                    es: 'Las gatitas son de ustedes ?',
                    ar: 'Lmshishat diawlkum'
                }
            ],
            tooltip: "Si es dificil leer diawlkum aumentale la e (diawelkum) :)"
        },
        {
            es_title: "Su",
            ar_title: "kum",
            es_example: "su libro (de ustedes)",
            ar_example: "Ktab kum",
            gender: 'M',
            examples: [
                {
                    es: 'Donde esta su cuarto ?',
                    ar: 'Fin kayn bitkum ?'
                }
            ],
            tooltip: "Se aumenta 'kum' al final"
        },
        {
            es_title: "Su",
            ar_title: "tkum",
            es_example: "Su camisa (de ustedes)",
            ar_example: "9amij tkum",
            gender: 'F',
            examples: [
                {
                    es: 'Su cocina es bonita',
                    ar: 'Cozintkum zwina'
                }
            ],
            tooltip: "Las palabras femininas casi siempre terminan con 'a' al final, y cuando se aumenta 'tkum' se elimina la 'a' "
        },
        {
            es_title: "Sus",
            ar_title: "kum",
            es_example: "Sus libros",
            ar_example: "Ktub kum",
            gender: 'F',
            examples: [
                {
                    es: 'Donde estan sus perros ?',
                    ar: 'Fin kaynin klabkum ?'
                }
            ],
        },
        {
            es_title: "Sus",
            ar_title: "kum",
            es_example: "Sus camisas",
            ar_example: "9wamej kum",
            gender: 'F',
            examples: [
                {
                    es: 'Donde estan sus gatas ?',
                    ar: 'Fin kaynin mshishatkum ?'
                }
            ],
            tooltip: "9wamej es plural de 9amija. se pronuncia 9wamj sin la e"
        },
    ],

    ellos: [
        {
            es_title: "Suyo",
            ar_title: "Dialhum",
            es_example: "Libro suyo (de ellos / ellas)",
            ar_example: "Ktab dialhum",
            gender: 'M',
            examples: [
                {
                    es: 'Este libro es de ellos',
                    ar: 'Had lktab dialhum'
                }
            ]
        },
        {
            es_title: "Suya",
            ar_title: "Dialthum",
            es_example: "Camisa suya",
            ar_example: "9amija dialthum",
            gender: 'F',
            examples: [
                {
                    es: 'Esta casa es de ellos',
                    ar: 'Had dar dialthum'
                }
            ],
            tooltip: "Se puede decir dialhum tambien aqui, es correcto de las dos formas 'dialthum' o 'dialkum'"
        },
        {
            es_title: "Suyos",
            ar_title: "Diawlhum",
            es_example: "Libros suyos (de ellos / ellas)",
            ar_example: "Ktub diawlhum",
            gender: 'M',
            examples: [
                {
                    es: 'Los libros son de ellos',
                    ar: 'Lktub diawlhum'
                }
            ],
            tooltip: "Si es dificil leer diawlhum aumentale la e (diawelhum) :)"
        },
        {
            es_title: "Suyas",
            ar_title: "Diawlhum",
            es_example: "Camisas suyas",
            ar_example: "9wamej diawlhum",
            gender: 'F',
            examples: [
                {
                    es: 'Estas Escobas son de ellos',
                    ar: 'Had shtabat diawlhum'
                }
            ],
            tooltip: "Si es dificil leer diawlhum aumentale la e (diawelhum) :)"
        },
        {
            es_title: "Su",
            ar_title: "hum",
            es_example: "Su libro (de ellos)",
            ar_example: "Ktab hum",
            gender: 'M',
            examples: [
                {
                    es: 'El cuarto de ellos no es grande',
                    ar: 'Bithum mashi kbir'
                }
            ],
            tooltip: "Se aumenta 'hum' al final"
        },
        {
            es_title: "Su",
            ar_title: "thum",
            es_example: "Su camisa",
            ar_example: "9amij thum",
            gender: 'F',
            examples: [
                {
                    es: 'La casa de ellos es chiquita',
                    ar: 'Darhum sghiwra'
                }
            ],
            tooltip: "Dar es palabra feminina pero no termina con a, esta es una de las palabras femininas especiales :)"
        },
        {
            es_title: "Sus",
            ar_title: "hum",
            es_example: "Sus libros",
            ar_example: "Ktub hum",
            gender: 'F',
            examples: [
                {
                    es: 'Sus perros son grandes',
                    ar: 'Klabhum kbar'
                }
            ],
        },
        {
            es_title: "Sus",
            ar_title: "hum",
            es_example: "Sus camisas",
            ar_example: "9wamej hum",
            gender: 'F',
            examples: [
                {
                    es: 'Viste sus mochilas ?',
                    ar: 'Shefti shkayrhum ?'
                }
            ],
            tooltip: "9wamej es plural de 9amija. se pronuncia 9wamj sin la e. shkayr (shkayer) es plural de shkara :)"
        },
    ]
}

export default data