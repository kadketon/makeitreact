# 🚀 **MakeItReact** Unleash the Power of Dynamic AI Components! 🤖

MakeItReact is an AI-driven tool that allows users to create dynamic HTML components with ease. Just design your component using a simple prompt, link it to your site, and watch it automatically update and react to real-time data! 🔥

## Here's how you can get started:

1. Log in to [makeitreact](https://makeitreact.netlify.app/)
2. Create your AI component:
   - Provide a base HTML template and instruction prompt 🏗️
   - Pass in any variables you need using the `${{variableName}}` syntax 🔍 (Currently variables are only supported in prompts)
3. Click "Next" and save your masterpiece! 💾

4. Install the MakeItReact package:
   - browser

   ```cdn
   https://unpkg.com/makeitreact@latest/dist/mod.browser.js
   ```
   - npm

   ```bash
   npm install makeitreact
   ```
   ```js
   const makeitreact = require("makeitreact");
   ```

5. Then, in your JavaScript, let the magic happen:
   ```js
   const result = makeitreact.generate("<COMPONENT_ID>", {
        variableName: "<VALUE>"
   });
   ```
8. Sanitize the generated HTML before use:
    ```js
    result.then((generatedHtml) => {
        const sanitizeHtml = DOMPurify.sanitize(generatedHtml); 
        // safe to use 🎨
   });
    ```

## Examples

### Prompt

```
Greet the user, ${{username}}, using the appropriate language for their location, ${{location}}
```

### Base HTML

```html
<div>
  <h1>Hello!</h1>
  <p>We're so glad you're here. Have an amazing day!</p>
</div>
```

### Usage

```js
makeitreact.generate("<COMPONENT_ID>", {
    username: "<PASS>",
    location: "<PASS>"
});
```

## Thank you for taking the time to look into this!

That's it, my friend! 🙌 Get ready to create some seriously awesome components and watch them come to life on your site. 🚀 Happy coding, and don't forget to have fun! 😎
