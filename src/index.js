import Promise from "promise-polyfill";
import { fetch as fetchPolyfill } from "whatwg-fetch";
import { generateEndpoint } from "./constants";

if (!window.Promise) {
  window.Promise = Promise;
}
if (!window.fetch) {
  window.fetch = fetchPolyfill;
}

class MakeItReactError extends Error {
  constructor(message) {
    super(`Generation Operation Failed: ${message}`);
    this.name = "MakeItReactError";
  }
}

async function generateComponent(component_id, component_variables) {
  const response = await fetch(generateEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ component_id, component_variables }),
  });

  const responseJson = await response.json();

  if (!responseJson.status) {
    throw new Error(responseJson.message);
  }

  return responseJson.data;
}

window.makeitreact = {
  async generate(component_id, component_variables) {
    try {
      return await generateComponent(component_id, component_variables);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      console.error(`Failure in makeitreact module: ${errorMessage}`);
      throw new MakeItReactError(errorMessage);
    }
  },
};
