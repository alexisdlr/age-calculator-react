export type ValidationRule = {
  regex: RegExp;
  min: number;
  max: number;
};

// Define un tipo para el objeto de reglas de validación
export type ValidationRules = {
  [key: string]: ValidationRule;
};
