```javascript
"use strict";

const questions = [
    {
        topic: "Electrochemical Cells",
        q: "In a Daniell cell, which statement correctly describes the anode?",
        options: [
            "Reduction occurs and its mass increases",
            "Oxidation occurs and zinc dissolves",
            "Reduction occurs and zinc dissolves",
            "Oxidation occurs and copper dissolves"
        ],
        answer: 1,
        explanation: "Zinc acts as the anode. It undergoes oxidation: Zn(s) → Zn²⁺(aq) + 2e⁻. Zinc enters the solution, so the zinc electrode loses mass."
    },
    {
        topic: "Cell Potential",
        q: "Given E°(Cu²⁺/Cu) = +0.34 V and E°(Zn²⁺/Zn) = −0.76 V, what is E°cell for the Daniell cell?",
        options: [
            "−1.10 V",
            "+0.42 V",
            "+1.10 V",
            "−0.42 V"
        ],
        answer: 2,
        explanation: "E°cell = E°cathode − E°anode = 0.34 − (−0.76) = +1.10 V."
    },
    {
        topic: "Nernst Equation",
        q: "At 298 K, which expression gives the cell potential for Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)?",
        options: [
            "E = E° − (0.0591/2) log([Zn²⁺]/[Cu²⁺])",
            "E = E° + (0.0591/2) log([Zn²⁺]/[Cu²⁺])",
            "E = E° − 0.0591 log([Zn²⁺]/[Cu²⁺])",
            "E = E° + (0.0591/2) log([Cu²⁺][Zn²⁺])"
        ],
        answer: 0,
        explanation: "The Nernst equation is E = E° − (0.0591/n) log Q at 298 K. Here n = 2 and Q = [Zn²⁺]/[Cu²⁺]. Pure solids are omitted."
    },
    {
        topic: "Electron Transfer",
        q: "For the balanced cell reaction Zn + Cu²⁺ → Zn²⁺ + Cu, what is the value of n in ΔG° = −nFE°cell?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 1,
        explanation: "Zn → Zn²⁺ + 2e⁻. Two electrons are transferred per mole of the balanced reaction, so n = 2."
    },
    {
        topic: "Gibbs Energy",
        q: "A cell has E°cell = +1.00 V and transfers 2 mol of electrons per mole of reaction. What is ΔG° approximately? Take F = 96500 C mol⁻¹.",
        options: [
            "+193 kJ mol⁻¹",
            "−96.5 kJ mol⁻¹",
            "+96.5 kJ mol⁻¹",
            "−193 kJ mol⁻¹"
        ],
        answer: 3,
        explanation: "ΔG° = −nFE°cell = −2 × 96500 × 1.00 J mol⁻¹ = −193000 J mol⁻¹ = −193 kJ mol⁻¹."
    },
    {
        topic: "Conductance",
        q: "The resistance of a solution is 50 Ω and its cell constant is 1.25 cm⁻¹. What is its conductivity?",
        options: [
            "0.025 S cm⁻¹",
            "0.040 S cm⁻¹",
            "62.5 S cm⁻¹",
            "40 S cm⁻¹"
        ],
        answer: 0,
        explanation: "Conductivity κ = cell constant/resistance = 1.25/50 = 0.025 S cm⁻¹."
    },
    {
        topic: "Molar Conductivity",
        q: "The conductivity of a solution is 0.010 S cm⁻¹ and its concentration is 0.20 mol L⁻¹. What is its molar conductivity?",
        options: [
            "5 S cm² mol⁻¹",
            "20 S cm² mol⁻¹",
            "50 S cm² mol⁻¹",
            "200 S cm² mol⁻¹"
        ],
        answer: 2,
        explanation: "Λm = κ × 1000/C = 0.010 × 1000/0.20 = 50 S cm² mol⁻¹."
    },
    {
        topic: "Dilution",
        q: "What generally happens to the molar conductivity of a weak electrolyte when it is diluted?",
        options: [
            "It decreases because ionisation decreases",
            "It remains exactly constant",
            "It increases significantly due to increased ionisation",
            "It becomes zero"
        ],
        answer: 2,
        explanation: "Dilution increases the degree of ionisation of a weak electrolyte. Consequently, its molar conductivity increases significantly."
    },
    {
        topic: "Kohlrausch's Law",
        q: "According to Kohlrausch's law, the limiting molar conductivity of an electrolyte is:",
        options: [
            "The product of the ionic conductivities",
            "The sum of the limiting ionic conductivities, multiplied by their stoichiometric coefficients",
            "Always equal to its conductivity at 1 M",
            "Independent of the ions present"
        ],
        answer: 1,
        explanation: "At infinite dilution, Λm° = ν+λ+° + ν−λ−°. The limiting molar conductivity is the stoichiometric sum of the individual ionic contributions."
    },
    {
        topic: "Electrolysis",
        q: "How much charge is required to deposit 1 mol of Ag from Ag⁺(aq), assuming 100% current efficiency?",
        options: [
            "96500 C",
            "193000 C",
            "48250 C",
            "289500 C"
        ],
        answer: 0,
        explanation: "Ag⁺ + e⁻ → Ag. One mole of silver requires one mole of electrons, so Q = 1 × F = 96500 C."
    },
    {
        topic: "Faraday's Law",
        q: "The same charge passes through separate Ag⁺ and Cu²⁺ solutions. If the deposited silver mass is 2.16 g, what mass of copper is deposited? Use Ag = 108 and Cu = 63.5 g mol⁻¹.",
        options: [
            "0.635 g",
            "1.27 g",
            "2.54 g",
            "4.32 g"
        ],
        answer: 1,
        explanation: "For the same charge, m ∝ M/z. For Ag, z = 1; for Cu, z = 2. mCu = 2.16 × (63.5/2)/108 = 0.635 g. Therefore, the correct answer is 0.635 g."
    },
    {
        topic: "Batteries",
        q: "Which statement about a rechargeable battery is correct?",
        options: [
            "Its cell reaction can be driven in reverse by supplying electrical energy",
            "It can never operate as a galvanic cell",
            "It produces electricity without any chemical reaction",
            "It cannot be recharged after discharging"
        ],
        answer: 0,
        explanation: "A rechargeable battery can undergo a reverse chemical reaction when an external electrical source supplies energy during charging."
    },
    {
        topic: "Fuel Cells",
        q: "In a hydrogen–oxygen fuel cell, the overall reaction during operation is:",
        options: [
            "H₂ + O₂ → 2H₂O",
            "2H₂ + O₂ → 2H₂O",
            "2H₂O → 2H₂ + O₂",
            "H₂ + 2O₂ → H₂O"
        ],
        answer: 1,
        explanation: "The balanced overall reaction is 2H₂(g) + O₂(g) → 2H₂O(l). Hydrogen is oxidised and oxygen is reduced."
    },
    {
        topic: "Corrosion",
        q: "Rusting of iron in moist air is best described as:",
        options: [
            "Only a physical change",
            "Reduction of iron",
            "An electrochemical process involving oxidation of iron",
            "A process that requires no water or oxygen"
        ],
        answer: 2,
        explanation: "Rusting is an electrochemical process. Iron is oxidised, and oxygen is reduced in the presence of moisture. Rust is hydrated iron(III) oxide."
    },
    {
        topic: "Cell Spontaneity",
        q: "At constant temperature and pressure, a cell reaction is spontaneous in the forward direction under the stated conditions when:",
        options: [
            "Ecell < 0 and ΔG > 0",
            "Ecell = 0 and ΔG < 0",
            "Ecell > 0 and ΔG < 0",
            "Ecell < 0 and ΔG = 0"
        ],
        answer: 2,
        explanation: "For a cell reaction, ΔG = −nFEcell. A positive cell potential corresponds to negative Gibbs energy change and a spontaneous forward reaction."
    }
];

const $ = id => document.getElementById(id);

const intro = $("intro");
const quiz = $("quiz");
const result = $("result");

let current = 0;
let answers = Array(questions.length).fill(null);
let timeLeft = 15 * 60;
let timerId = null;
let finished = false;
let studentName = "";

function startTest() {
    studentName = $("studentName").value.trim().slice(0, 40);

    current = 0;
    answers = Array(questions.length).fill(null);
    timeLeft = 15 * 60;
    finished = false;

    intro.classList.add("hidden");
    result.classList.add("hidden");
    quiz.classList.remove("hidden");

    renderPalette();
    renderQuestion();
    updateTimer();

    clearInterval(timerId);
    timerId = setInterval(() => {
        if (finished) return;

        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            finishTest(true);
        }
    }, 1000);

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    $("timeText").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    $("timer").classList.toggle("warning", timeLeft <= 60);
}

function renderQuestion() {
    const item = questions[current];

    $("questionCounter").textContent =
        `Question ${current + 1} of ${questions.length}`;

    $("questionText").textContent = item.q;
    $("topicBadge").textContent = item.topic;

    $("progressBar").style.width =
        `${((current + 1) / questions.length) * 100}%`;

    $("prevBtn").disabled = current === 0;
    $("nextBtn").textContent =
        current === questions.length - 1 ? "Review & Submit →" : "Next →";

    const optionsBox = $("options");
    optionsBox.replaceChildren();

    item.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = String.fromCharCode(65 + index);

        const label = document.createElement("span");
        label.textContent = option;

        button.append(letter, label);

        if (answers[current] === index) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => selectAnswer(index));
        optionsBox.appendChild(button);
    });

    const feedback = $("feedback");
    feedback.classList.add("hidden");
    feedback.classList.remove("incorrect");
    feedback.replaceChildren();

    if (answers[current] !== null) {
        showFeedback();
    }

    renderPalette();
    updateAnswered();
}

function selectAnswer(index) {
    if (finished) return;

    answers[current] = index;

    renderQuestion();
    showFeedback();
}

function showFeedback() {
    const item = questions[current];
    const selected = answers[current];
    const isCorrect = selected === item.answer;

    document.querySelectorAll(".option").forEach((button, index) => {
        button.disabled = true;

        if (index === item.answer) {
            button.classList.add("correct");
        }

        if (index === selected && !isCorrect) {
            button.classList.add("wrong");
        }
    });

    const feedback = $("feedback");
    feedback.classList.remove("hidden");
    feedback.classList.toggle("incorrect", !isCorrect);

    const heading = document.createElement("strong");
    heading.textContent = isCorrect
        ? "✓ Correct answer"
        : "✗ Not quite. Review the solution.";

    const explanation = document.createElement("p");
    explanation.textContent = item.explanation;
    explanation.style.marginBottom = "0";

    feedback.replaceChildren(heading, explanation);
}

function renderPalette() {
    const palette = $("questionPalette");
    palette.replaceChildren();

    questions.forEach((_, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = index + 1;
        button.setAttribute("aria-label", `Go to question ${index + 1}`);

        if (answers[index] !== null) {
            button.classList.add("answered");
        }

        if (index === current) {
            button.classList.add("current");
            button.setAttribute("aria-current", "step");
        }

        button.addEventListener("click", () => {
            if (finished) return;
            current = index;
            renderQuestion();
        });

        palette.appendChild(button);
    });
}

function updateAnswered() {
    const count = answers.filter(answer => answer !== null).length;

    $("answeredCount").textContent = `Answered: ${count}/${questions.length}`;
    $("sidebarAnswered").textContent = `${count} / ${questions.length}`;
}

function finishTest(timeExpired = false) {
    if (finished) return;

    if (!timeExpired) {
        const unanswered = answers.filter(answer => answer === null).length;

        const message = unanswered
            ? `You have ${unanswered} unanswered question(s). Submit anyway?`
            : "Are you sure you want to submit your test?";

        if (!window.confirm(message)) return;
    }

    finished = true;
    clearInterval(timerId);

    quiz.classList.add("hidden");
    result.classList.remove("hidden");

    const correct = answers.reduce(
        (total, answer, index) =>
            total + (answer === questions[index].answer ? 1 : 0),
        0
    );

    const attempted = answers.filter(answer => answer !== null).length;
    const wrong = attempted - correct;
    const unattempted = questions.length - attempted;
    const percentage = Math.round((correct / questions.length) * 100);

    $("resultTitle").textContent = studentName
        ? `Well done, ${studentName}!`
        : "Your Results";

    $("resultMessage").textContent = timeExpired
        ? "Time is up. Your test has been submitted automatically."
        : "Your test has been submitted. Review the explanations below.";

    $("scoreValue").textContent = `${correct}/${questions.length}`;
    $("percentageValue").textContent = `${percentage}%`;
    $("correctCount").textContent = correct;
    $("wrongCount").textContent = wrong;
    $("unattemptedCount").textContent = unattempted;

    renderReview();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderReview() {
    const review = $("reviewList");
    review.replaceChildren();

    questions.forEach((item, index) => {
        const selected = answers[index];
        const correct = selected === item.answer;

        const article = document.createElement("article");
        article.className = "review-item";

        const title = document.createElement("h3");
        title.textContent = `${index + 1}. ${item.q}`;

        const status = document.createElement("p");
        status.className = `review-status ${correct ? "good" : "bad"}`;
        status.textContent = selected === null
            ? "Not attempted"
            : correct ? "✓ Correct" : "✗ Incorrect";

        const chosen = document.createElement("p");
        chosen.className = "answer-line";
        chosen.textContent = `Your answer: ${
            selected === null
                ? "Not attempted"
                : `${String.fromCharCode(65 + selected)}. ${item.options[selected]}`
        }`;

        const answer = document.createElement("p");
        answer.className = "answer-line";
        answer.textContent =
            `Correct answer: ${String.fromCharCode(65 + item.answer)}. ${item.options[item.answer]}`;

        const explanation = document.createElement("p");
        explanation.textContent = `Explanation: ${item.explanation}`;

        article.append(title, status, chosen, answer, explanation);
        review.appendChild(article);
    });
}

$("startBtn").addEventListener("click", startTest);

$("prevBtn").addEventListener("click", () => {
    if (current > 0 && !finished) {
        current--;
        renderQuestion();
    }
});

$("nextBtn").addEventListener("click", () => {
    if (finished) return;

    if (current < questions.length - 1) {
        current++;
        renderQuestion();
    } else {
        finishTest();
    }
});

$("submitBtn").addEventListener("click", () => finishTest());

$("retakeBtn").addEventListener("click", () => {
    clearInterval(timerId);
    result.classList.add("hidden");
    intro.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

$("printBtn").addEventListener("click", () => window.print());
```
