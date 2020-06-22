export interface Healthlabel {
    weblabel: string;
    apiparameter: string;
    defination: string;
}

export interface HealthlabelRoot {
    healthlabels: Healthlabel[];
}
