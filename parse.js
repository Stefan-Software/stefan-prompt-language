// Importing necessary modules
import { spawnSync } from 'child_process';
import fs from 'fs-extra';
// Defining an object called stefan
/**
 * An object containing functions for parsing and executing prompts.
 */
const stefan = {
    /**
     * Parses a prompt string by replacing placeholders with corresponding values in data and evaluating JavaScript code.
     * @param prompt - The prompt string to parse.
     * @param data - An array of values to use as replacements for placeholders in the prompt string.
     * @returns The parsed prompt string.
     */
    parse: (prompt, data) => {
        // Initializing the currentIndex variable to 0
        let currentIndex = 0;
        // Replacing all instances of $${} with the result of the evaluated jsCode
        prompt = prompt.replace(/\$\$\{([\s\S]*?)\}\$\$/g, (_, jsCode) => {
            try {
                // Writing the evaluated jsCode to a file
                fs.writeFileSync('$n0c1w0rnr8aw9p0cdfnas.js', fs.existsSync('$n0c1w0rnr8aw9p0cdfnas.js') ? fs.readFileSync('$n0c1w0rnr8aw9p0cdfnas.js', 'utf-8') + '\n' + jsCode : jsCode);
            }
            catch (error) {
                console.error(`Error evaluating code ${jsCode}:`, error);
            }
            return '';
        });
        // Replacing all instances of ${} with the corresponding value in data
        return prompt.replace(/\${(.*?)}/g, (_, match) => {
            try {
                // Getting the value at the currentIndex in data
                const value = data[currentIndex];
                // Incrementing the currentIndex and wrapping around if it exceeds the length of data
                currentIndex = (currentIndex + 1) % data.length;
                // Returning the value if it is not undefined, otherwise returning an empty string
                return value !== undefined ? value : '';
            }
            catch (error) {
                console.error(`Error replacing placeholder ${match}:`, error);
                return '';
            }
        }).trim() + '\n';
    },
    /**
     * Executes the JavaScript code that was evaluated during the parsing of a prompt.
     */
    exec: () => {
        console.log('------------------');
        console.log('JavaScript output:');
        console.log('------------------ \n');
        // Running the node command on the file containing the evaluated jsCode
        const result = spawnSync('node', ['$n0c1w0rnr8aw9p0cdfnas.js']);
        // Logging any errors that occurred during execution
        if (result.error) {
            console.error('Error:', result.error);
        }
        // Logging the stdout and stderr of the executed code
        console.log(result.stdout.toString());
        console.log(result.stderr.toString());
        // Removing the file containing the evaluated jsCode
        fs.removeSync('$n0c1w0rnr8aw9p0cdfnas.js');
    }
};
// Reading the input file and storing it in a variable called inputString
const inputString = fs.readFileSync(process.argv[2], 'utf-8');
// Parsing the inputString with the given data and storing the result in a variable called result
const result = stefan.parse(inputString, ['Welcome back,', 'As you can see, 1']);
console.log(result);
// Executing the parsed code
stefan.exec();
