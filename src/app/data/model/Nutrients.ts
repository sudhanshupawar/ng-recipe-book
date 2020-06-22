export interface Nutrient {
    ntrcode: string;
    name: string;
    unit: string;
}

export interface NutrientRoot {
    nutrient: Nutrient[];
}
