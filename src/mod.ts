import { generateEndpoint } from "./constants.js";

interface MakeItReactResponse {
  status: boolean;
  message?: string;
  data?: string;
}

export class MakeItReactError extends Error {
  constructor(message: string) {
    super(`Generation Operation Failed: ${message}`);
    this.name = "MakeItReactError";
  }
}

async function generateComponent(
  component_id: string,
  component_variables: { [key: string]: any }
): Promise<string | undefined> {
  const response = await fetch(generateEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ component_id, component_variables }),
  });

  const responseJson: MakeItReactResponse = await response.json();

  if (!responseJson.status) {
    throw new Error(responseJson.message);
  }

  return responseJson.data;
}

export async function generate(
  component_id: string,
  component_variables: { [key: string]: any }
) {
  try {
    return await generateComponent(component_id, component_variables);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error(`Failure in makeitreact module: ${errorMessage}`);
    throw new MakeItReactError(errorMessage);
  }
}
