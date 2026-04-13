const input = document.getElementById('cmd-input');
const output = document.getElementById('terminal-content');

const commands = {
    help: "Available commands: help, clear, ls, schedule, info",
    info: "OS Simulation Environment v1.0.0 | Auth: Sneha Parmar",
    ls: "bin/\ndev/\nroot/\nscheduling_algorithm.so",
    clear: () => { output.innerHTML = ""; },
    schedule: () => {
        printLine("Initializing FCFS Scheduling Algorithm...", "output-dim");
        setTimeout(() => {
            printLine("P1: Executing [5ms]...", "output-green");
            printLine("P2: Executing [3ms]...", "output-green");
            printLine("P3: Executing [8ms]...", "output-green");
            printLine("Simulation Complete. Average Waiting Time: 4ms", "output-white");
        }, 1000);
        return "";
    }
};

function printLine(text, className = "") {
    const line = document.createElement('div');
    line.className = `line ${className}`;
    line.innerText = text;
    output.appendChild(line);
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.trim().toLowerCase();
        printLine(`> ${cmd}`, "output-dim");

        if (commands[cmd]) {
            if (typeof commands[cmd] === 'function') {
                commands[cmd]();
            } else {
                printLine(commands[cmd]);
            }
        } else if (cmd !== "") {
            printLine(`Command not found: ${cmd}`, "output-dim");
        }

        input.value = "";
        output.scrollTop = output.scrollHeight;
    }
});
