import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  // This assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: "src/graphql/**/*.graphql",
  // Don't exit with non-zero status when there are no documents
  ignoreNoDocuments: true,
  generates: {
    // Use a path that works the best for the structure of your application
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        {
          "typescript-react-apollo": {
            withHooks: true,
            useSuspenseQuery: true,
          },
        },
      ],
    },
  },
};

export default config;
