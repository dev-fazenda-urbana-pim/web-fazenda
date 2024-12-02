export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Para transformar arquivos .ts e .tsx
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"], // Adiciona as extensões de arquivo TypeScript
  testEnvironment: "jsdom",
  transformIgnorePatterns: [
    "/node_modules/(?!(@radix-ui|some-other-package)/)" // Permite transformar pacotes dentro de node_modules que usam ESModules
  ],
};
