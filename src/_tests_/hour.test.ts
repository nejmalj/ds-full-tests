import { describe, expect, test } from "vitest";
import {getJupiterHour} from "../modules/calcul.ts";

const mocks = [
    {
        planets: {
            moon: {
                value: 4,
                isActivated: true,
            },
            sun: {
                value: 2,
                isActivated: true,
            },
            earth: {
                value: 3,
                isActivated: true,
            }
            },
        result: "nuight",
    },
    {
        planets: {
            moon: {
                value: 1,
                isActivated: true,
            },
            sun: {
                value: 1,
                isActivated: true,
            },
            earth: {
                value: 2,
                isActivated: false,
            }
        },
        result: "aprenoon",
    },
    {
        planets: {
            moon: {
                value: 2,
                isActivated: true,
            },
            sun: {
                value: 0,
                isActivated: false,
            },
            earth: {
                value: 4,
                isActivated: true,
            }
        },
        result: "soirning",
    }
]

describe('check if powers are working properly', () => {
    mocks.forEach((mock, index) => {
        test(`mockup ${index + 1}: correct result for given hour configurations`, () => {
            const { moon, sun, earth } = mock.planets;
            const result = getJupiterHour(moon, sun, earth);
            expect(result).toBe(mock.result);
        });
    });
})