export type Station = {
    uuid: string;
    number: string;
    shortname: string;
    longname: string;
    km: number;
    agency: string;
    longitude: number;
    latitude: number;
    water: Water;
    timeseries: Timeseries[];
}

export type Timeseries = {
    shortname: string;
    longname: string;
    unit: string;
    equidistance: number;
    currentMeasurement: CurrentMeasurement;
    gaugeZero: GaugeZero;
    characteristicValues: CharacteristicValue[];
}

export type CharacteristicValue = {
    shortname: string;
    longname: string;
    unit: string;
    value: number;
    validFrom?: string;
    occurrences?: string[];
    timespanStart?: string;
    timespanEnd?: string;
}

export type GaugeZero = {
    unit: string;
    value: number;
    validFrom: string;
}

export type CurrentMeasurement = {
    timestamp: string;
    value: number;
    stateMnwMhw: string;
    stateNswHsw: string;
}

export type Water = {
    shortname: string;
    longname: string;
}