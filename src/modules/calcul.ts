export function getJupiterHour (
    moonHour: { value: number; isActivated: boolean; },
    sunHour: { value: number; isActivated: boolean; },
    earthHour: { value: number; isActivated: boolean; }
) : string {
    let result = 0;
    let jupiterHour = "";

    // calcul des valeurs en checkant si chaque cadran est activé ou pas
    if (moonHour.isActivated) {
        result += moonHour.value;
    }

    if (sunHour.isActivated) {
        result += sunHour.value;
    }

    if (earthHour.isActivated) {
        result += earthHour.value;
    }

    // application des pouvoirs de la lune
    if (moonHour.isActivated) {
        result -= 2;
        result = Math.floor(result / 2);
        console.log("Après application des pouvoirs de la lune :", result);
    }

    // application des pouvoirs du soleil
    if (sunHour.isActivated) {
        if (earthHour.isActivated) {
            result -= earthHour.value;
        }
        result += earthHour.value * 2;
        console.log("Après application des pouvoirs du soleil :", result);
    }

    // application des pouvoirs de la terre
    if (earthHour.isActivated) {
        result = 6;
        console.log("Après application des pouvoirs de la terre :", result);
    }

    console.log("Résultat final :", result);
    if (result <= 2) {
        jupiterHour = "mortin";
    } else if (result <= 4) {
        jupiterHour = "aprenoon";
    } else if (result <= 5) {
        jupiterHour = "soirning";
    } else {
        jupiterHour = "nuight";
    }

    return jupiterHour;
}