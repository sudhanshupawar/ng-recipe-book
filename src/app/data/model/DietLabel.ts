export interface Dietlabel {
    weblabel: string;
    apiparameter: string;
    defination: string;
}

export interface DietlabelRoot {
    dietlabels: Dietlabel[];
}
