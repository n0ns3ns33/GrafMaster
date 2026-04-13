[script.js](https://github.com/user-attachments/files/26668296/script.js)
// ==================== ДАННЫЕ УРОВНЕЙ (8 УРОВНЕЙ) ====================
const levelsData = [
    { // 1. Линейная функция
        name: "Линейная функция",
        expReward: { theory: 15, test: 25, practice: 40 },
        requiredExp: 0,[index.html](https://github.com/user-attachments/files/26668299/index.html)
[style.css](https://github.com/user-attachments/files/26668298/style.css)

        theory: `
            <div class="formula-box">
                <p>🎯 <strong class="highlight">Формула:</strong> \\( y = k \\cdot x + b \\)</p>
                <p>📌 <strong>График — это ПРЯМАЯ ЛИНИЯ!</strong></p>
            </div>
            <div class="important">⚠️ ВАЖНО: k ≠ 0 для наклонной прямой, при k = 0 — горизонтальная прямая!</div>
            <div class="property-grid">
                <div class="property-card"><strong>📐 Что такое \\(k\\)?</strong><span>Угловой коэффициент (наклон прямой). <strong class="highlight">k > 0</strong> → возрастает 📈, <strong class="highlight">k < 0</strong> → убывает 📉.</span></div>
                <div class="property-card"><strong>📍 Что такое \\(b\\)?</strong><span>Свободный член — точка пересечения с осью Y: <strong class="highlight">(0; b)</strong>.</span></div>
                <div class="property-card"><strong>🔍 Нули функции</strong><span>\\(x = -\\frac{b}{k}\\) (при k ≠ 0) — точка пересечения с осью X.</span></div>
                <div class="property-card"><strong>⭐ Чётность</strong><span>При b = 0 → <strong class="highlight">нечётная</strong> (симметрия относительно начала). При k = 0 → <strong class="highlight">чётная</strong>.</span></div>
            </div>
            <div class="formula-list">
                <strong>📐 Дополнительные формулы:</strong>
                <ul>
                    <li>Угол наклона: \\( \\alpha = \\arctan(k) \\)</li>
                    <li>Уравнение прямой через две точки: \\( y - y_1 = \\frac{y_2 - y_1}{x_2 - x_1}(x - x_1) \\)</li>
                    <li>Условие параллельности: \\( k_1 = k_2 \\)</li>
                    <li>Условие перпендикулярности: \\( k_1 \\cdot k_2 = -1 \\)</li>
                </ul>
            </div>
            <div class="example-box" data-example-func="2*x+3">
                <strong>📈 Пример 1: y = 2x + 3</strong>
                <p><strong class="highlight">k = 2 > 0</strong> → прямая идёт вверх (возрастает)<br><strong class="highlight">b = 3</strong> → пересекает ось Y в точке (0; 3)<br>Нуль функции: x = -1.5</p>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
            <div class="example-box" data-example-func="-x+2">
                <strong>📉 Пример 2: y = -x + 2</strong>
                <p><strong class="highlight">k = -1 < 0</strong> → прямая идёт вниз (убывает)<br><strong class="highlight">b = 2</strong> → пересекает ось Y в точке (0; 2)</p>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
        `,
        testQuestions: [
            { text: "Как выглядит формула линейной функции?", options: ["y = k·x + b", "y = a·x² + b·x + c", "y = k/x", "y = aˣ"], correct: 0, explanation: "Линейная функция — это y = k·x + b. График — прямая линия!" },
            { text: "Что показывает число k в формуле y = k·x + b?", options: ["Наклон прямой", "Точку пересечения с Y", "Название функции", "Цвет графика"], correct: 0, explanation: "k — угловой коэффициент, отвечает за наклон." },
            { text: "Если k > 0, то прямая...", options: ["Идёт вверх (возрастает)", "Идёт вниз (убывает)", "Стоит на месте", "Не существует"], correct: 0, explanation: "k>0 → функция возрастает, прямая поднимается вверх." },
            { text: "Где прямая y = 3x - 4 пересекает ось Y?", options: ["(0;-4)", "(0;3)", "(-4;0)", "(3;0)"], correct: 0, explanation: "b = -4, значит точка (0; -4)." },
            { text: "Найди нуль функции y = 2x - 6 (где она пересекает ось X)", options: ["3", "-3", "6", "-6"], correct: 0, explanation: "2x - 6 = 0 → x = 3." },
            { text: "Какая линейная функция проходит через начало координат?", options: ["y = 2x", "y = 2x+1", "y = 5", "y = x²"], correct: 0, explanation: "Когда b=0, прямая проходит через (0;0)." },
            { text: "Чему равна область значений y = 5?", options: ["{5}", "(-∞;∞)", "[5;∞)", "(-∞;5]"], correct: 0, explanation: "Это постоянная функция, y всегда равно 5." },
            { text: "Почему y = -3x + 2 убывает?", options: ["k = -3 < 0", "k = 2 > 0", "b = 2 > 0", "b = 2 < 0"], correct: 0, explanation: "k = -3 отрицательный, значит прямая идёт вниз." },
            { text: "Какой график у линейной функции?", options: ["Прямая линия", "Парабола", "Гипербола", "Кубическая парабола"], correct: 0, explanation: "Линейная функция всегда рисует прямую линию." },
            { text: "Функция y = 7 (k=0) называется...", options: ["Постоянной", "Возрастающей", "Убывающей", "Нечётной"], correct: 0, explanation: "k=0 → прямая горизонтальна, значение не меняется." }
        ]
    },
    { // 2. Квадратичная функция
        name: "Квадратичная функция",
        expReward: { theory: 20, test: 30, practice: 50 },
        requiredExp: 80,
        theory: `
            <div class="formula-box">
                <p>🎯 <strong class="highlight">Формула:</strong> \\( y = a x^2 + b x + c \\) (a ≠ 0)</p>
                <p>📌 <strong>График — это ПАРАБОЛА!</strong> Похожа на улыбку или горку.</p>
            </div>
            <div class="important">⚠️ ВАЖНО: a определяет направление ветвей: a > 0 → ветви вверх 😊, a < 0 → ветви вниз ☹️!</div>
            <div class="property-grid">
                <div class="property-card"><strong>😊 Что такое a?</strong><span>Направление ветвей. <strong class="highlight">a > 0</strong> → улыбка, <strong class="highlight">a < 0</strong> → грусть.</span></div>
                <div class="property-card"><strong>📍 Вершина</strong><span>x₀ = -b/(2a), y₀ = f(x₀)</span></div>
                <div class="property-card"><strong>🔍 Дискриминант</strong><span>D = b² - 4ac<br>D > 0 → 2 корня, D = 0 → 1 корень, D < 0 → нет корней</span></div>
                <div class="property-card"><strong>⭐ Чётность</strong><span>При b = 0 → <strong class="highlight">чётная</strong> (симметрия относительно оси Y).</span></div>
            </div>
            <div class="formula-list">
                <strong>📐 Дополнительные формулы:</strong>
                <ul>
                    <li>Теорема Виета: x₁ + x₂ = -b/a, x₁ · x₂ = c/a</li>
                    <li>Вершинная форма: y = a(x - x₀)² + y₀</li>
                    <li>Ось симметрии: x = -b/(2a)</li>
                </ul>
            </div>
            <div class="example-box" data-example-func="x*x-4*x+3">
                <strong>📈 Пример: y = x² - 4x + 3</strong>
                <p><strong class="highlight">a = 1 > 0</strong> → ветви вверх (улыбка 😊)<br>Вершина: x₀ = 2, y₀ = -1<br>Корни: x = 1 и x = 3</p>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
            <div class="example-box" data-example-func="-2*x*x+8*x-5">
                <strong>📉 Пример: y = -2x² + 8x - 5</strong>
                <p><strong class="highlight">a = -2 < 0</strong> → ветви вниз (грустное лицо ☹️)<br>Вершина: x₀ = 2, y₀ = 3 (это самая высокая точка)</p>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
        `,
        testQuestions: [
            { text: "Как называется график квадратичной функции?", options: ["Парабола", "Прямая", "Гипербола", "Кубическая парабола"], correct: 0, explanation: "Квадратичная функция рисует параболу — похожую на улыбку или горку. 😊" },
            { text: "Если a > 0, то ветви параболы...", options: ["Вверх (улыбка)", "Вниз (грусть)", "Вправо", "Влево"], correct: 0, explanation: "a > 0 → ветви вверх, как улыбка 😊." },
            { text: "Где парабола y = x² - 4x + 3 пересекает ось Y?", options: ["(0;3)", "(3;0)", "(0;-3)", "(-3;0)"], correct: 0, explanation: "c = 3 → точка (0;3)." },
            { text: "Формула для нахождения вершины параболы:", options: ["x = -b/(2a)", "x = b/(2a)", "x = -b/a", "x = c/a"], correct: 0, explanation: "Вершина находится по формуле x₀ = -b/(2a)." },
            { text: "Сколько корней у уравнения x² + 4 = 0?", options: ["0", "1", "2", "3"], correct: 0, explanation: "x² = -4 не имеет решений, корней нет." },
            { text: "Функция y = x² является...", options: ["Чётной", "Нечётной", "Ни чётной, ни нечётной", "Периодической"], correct: 0, explanation: "f(-x)=(-x)²=x²=f(x) → чётная, симметрична относительно оси Y." },
            { text: "Наименьшее значение y = x² - 2x + 3 равно...", options: ["2", "3", "1", "0"], correct: 0, explanation: "Вершина x=1, y=1-2+3=2." },
            { text: "При a < 0 парабола имеет...", options: ["Максимум (самую высокую точку)", "Минимум (самую низкую точку)", "Точку перегиба", "Асимптоту"], correct: 0, explanation: "Ветви вниз → есть самая высокая точка — максимум." },
            { text: "Что показывает дискриминант D = b² - 4ac?", options: ["Сколько корней", "Где вершина", "Куда смотрят ветви", "Сдвиг"], correct: 0, explanation: "Дискриминант говорит, сколько раз парабола пересекает ось X." },
            { text: "Парабола y = (x-2)² + 1 имеет вершину в точке...", options: ["(2;1)", "(-2;1)", "(2;-1)", "(-2;-1)"], correct: 0, explanation: "Вершинная форма: (2;1)." }
        ]
    },
    { // 3. Обратная пропорциональность
        name: "Обратная пропорциональность",
        expReward: { theory: 20, test: 30, practice: 50 },
        requiredExp: 180,
        theory: `
            <div class="formula-box">
                <p>🎯 <strong class="highlight">Формула:</strong> y = k/x (k ≠ 0)</p>
                <p>📌 <strong>График — это ГИПЕРБОЛА!</strong> Состоит из двух ветвей.</p>
            </div>
            <div class="important">⚠️ ВАЖНО: x ≠ 0! График никогда не пересекает оси координат!</div>
            <div class="property-grid">
                <div class="property-card"><strong>📐 Что такое k?</strong><span>Если <strong class="highlight">k > 0</strong> — ветви в I и III четвертях. Если <strong class="highlight">k < 0</strong> — ветви во II и IV четвертях.</span></div>
                <div class="property-card"><strong>📍 Асимптоты</strong><span>Линии, к которым график приближается, но никогда не пересекает: <strong class="highlight">x = 0</strong> и <strong class="highlight">y = 0</strong> (оси координат).</span></div>
                <div class="property-card"><strong>🔍 Нули функции</strong><span>Нет! Гипербола никогда не пересекает оси.</span></div>
                <div class="property-card"><strong>⭐ Чётность</strong><span>Нечётная: симметрична относительно начала координат.</span></div>
            </div>
            <div class="formula-list">
                <strong>📐 Дополнительные формулы:</strong>
                <ul>
                    <li>Чем больше |k|, тем дальше ветви от начала координат</li>
                    <li>Гипербола убывает на каждом промежутке при k > 0</li>
                    <li>Область определения: (-∞; 0) ∪ (0; +∞)</li>
                </ul>
            </div>
            <div class="example-box" data-example-func="4/x">
                <strong>📈 Пример 1: y = 4/x (k>0)</strong>
                <p><strong class="highlight">k = 4 > 0</strong> → ветви в I и III четвертях</p>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
            <div class="example-box" data-example-func="-3/x">
                <strong>📉 Пример 2: y = -3/x (k<0)</strong>
                <p><strong class="highlight">k = -3 < 0</strong> → ветви во II и IV четвертях</p>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
        `,
        testQuestions: [
            { text: "График y = 3/x — это...", options: ["Гипербола", "Парабола", "Прямая", "Кубическая парабола"], correct: 0, explanation: "Обратная пропорциональность рисует гиперболу." },
            { text: "Асимптоты гиперболы y = k/x — это...", options: ["x=0 и y=0", "x=1 и y=1", "y=x", "x=y"], correct: 0, explanation: "Оси координат — это линии, к которым график приближается." },
            { text: "При k>0 гипербола находится в...", options: ["I и III четвертях", "II и IV четвертях", "I и II четвертях", "III и IV четвертях"], correct: 0, explanation: "k>0 → ветви в I и III четвертях." },
            { text: "Функция y = -2/x является...", options: ["Нечётной", "Чётной", "Ни той, ни другой", "Периодической"], correct: 0, explanation: "f(-x) = -(-2/x) = -f(x) → нечётная." },
            { text: "Область определения y = 5/x:", options: ["x ≠ 0", "x > 0", "x < 0", "Все числа"], correct: 0, explanation: "На ноль делить нельзя!" },
            { text: "При k>0 и x>0 значения y...", options: ["Положительные", "Отрицательные", "Ноль", "Не определены"], correct: 0, explanation: "y = k/x > 0." },
            { text: "Вертикальная асимптота гиперболы:", options: ["x=0", "y=0", "y=x", "x=1"], correct: 0, explanation: "x=0 — это вертикальная линия, к которой график приближается." },
            { text: "Гипербола y = k/x при k<0 находится в...", options: ["II и IV", "I и III", "I и II", "III и IV"], correct: 0, explanation: "k<0 → II и IV четверти." },
            { text: "Нули функции y = 3/x:", options: ["Нет", "x=0", "x=3", "x=-3"], correct: 0, explanation: "Дробь никогда не равна 0." },
            { text: "Функция y = 1/x при k>0...", options: ["Убывает на каждом промежутке", "Возрастает", "Постоянна", "Периодична"], correct: 0, explanation: "k=1>0 → убывает на (-∞;0) и (0;+∞)." }
        ]
    },
    { // 4. Степенная y = x
        name: "Степенная (y = x)",
        expReward: { theory: 15, test: 25, practice: 40 },
        requiredExp: 300,
        theory: `
            <div class="formula-box">
                <p>🎯 <strong class="highlight">Формула:</strong> y = x</p>
                <p>📌 <strong>График — это прямая линия!</strong> Проходит через начало координат.</p>
            </div>
            <div class="important">⚠️ ВАЖНО: Это частный случай линейной функции с k=1, b=0!</div>
            <div class="property-grid">
                <div class="property-card"><strong>📐 Наклон</strong><span><strong class="highlight">k = 1</strong> → прямая идёт вверх под углом 45°.</span></div>
                <div class="property-card"><strong>📍 Точки</strong><span>Проходит через (0;0), (1;1), (-1;-1).</span></div>
                <div class="property-card"><strong>⭐ Чётность</strong><span>Нечётная: f(-x) = -f(x).</span></div>
                <div class="property-card"><strong>📈 Монотонность</strong><span>Возрастает на всей числовой прямой.</span></div>
            </div>
            <div class="formula-list">
                <strong>📐 Дополнительные формулы:</strong>
                <ul>
                    <li>Обратная функция: y = x (сама себе обратна)</li>
                    <li>Симметрична относительно начала координат</li>
                </ul>
            </div>
            <div class="example-box" data-example-func="x">
                <strong>📈 График: y = x</strong>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
        `,
        testQuestions: [
            { text: "y = x — это...", options: ["Прямая", "Парабола", "Гипербола", "Кубическая парабола"], correct: 0, explanation: "Линейная функция с k=1." },
            { text: "Функция y = x является...", options: ["Нечётной", "Чётной", "Ни той, ни другой", "Периодической"], correct: 0, explanation: "f(-x) = -x = -f(x) → нечётная." },
            { text: "Точка пересечения с осями:", options: ["(0;0)", "(1;1)", "(0;1)", "(1;0)"], correct: 0, explanation: "Проходит через начало координат." },
            { text: "Область значений y = x:", options: ["(-∞;+∞)", "[0;+∞)", "(-∞;0]", "{0}"], correct: 0, explanation: "Все действительные числа." },
            { text: "Функция y = x...", options: ["Возрастает", "Убывает", "Постоянна", "Не монотонна"], correct: 0, explanation: "Возрастает на всей оси." },
            { text: "Значение y при x = -5:", options: ["-5", "5", "0", "1"], correct: 0, explanation: "-5." },
            { text: "Нуль функции y = x:", options: ["0", "1", "-1", "Нет"], correct: 0, explanation: "x=0." },
            { text: "График y = x симметричен относительно...", options: ["Начала координат", "Оси Y", "Оси X", "y=x"], correct: 0, explanation: "Нечётная → симметрия относительно (0;0)." },
            { text: "y = x — частный случай какой функции?", options: ["Линейной", "Квадратичной", "Показательной", "Логарифмической"], correct: 0, explanation: "Линейная с k=1, b=0." },
            { text: "При x → +∞, y = x →...", options: ["+∞", "-∞", "0", "1"], correct: 0, explanation: "Стремится к +∞." }
        ]
    },
    { // 5. Степенная y = x²
        name: "Степенная (y = x²)",
        expReward: { theory: 20, test: 30, practice: 50 },
        requiredExp: 440,
        theory: `
            <div class="formula-box">
                <p>🎯 <strong class="highlight">Формула:</strong> y = x²</p>
                <p>📌 <strong>График — это ПАРАБОЛА!</strong> Ветви вверх, как улыбка 😊</p>
            </div>
            <div class="important">⚠️ ВАЖНО: Это частный случай квадратичной функции с a=1, b=0, c=0!</div>
            <div class="property-grid">
                <div class="property-card"><strong>📍 Вершина</strong><span>В точке (0;0) — самая низкая точка.</span></div>
                <div class="property-card"><strong>🔍 Нули функции</strong><span>Один нуль: x = 0.</span></div>
                <div class="property-card"><strong>⭐ Чётность</strong><span>Чётная: симметрична относительно оси Y.</span></div>
                <div class="property-card"><strong>📈 Монотонность</strong><span>Убывает на (-∞;0], возрастает на [0;+∞).</span></div>
            </div>
            <div class="formula-list">
                <strong>📐 Дополнительные формулы:</strong>
                <ul>
                    <li>Область значений: [0; +∞)</li>
                    <li>Минимальное значение: 0 при x = 0</li>
                </ul>
            </div>
            <div class="example-box" data-example-func="x*x">
                <strong>📈 График: y = x²</strong>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
        `,
        testQuestions: [
            { text: "y = x² — это...", options: ["Парабола", "Прямая", "Гипербола", "Кубическая парабола"], correct: 0, explanation: "Квадратичная функция." },
            { text: "Функция y = x² является...", options: ["Чётной", "Нечётной", "Ни той, ни другой", "Периодической"], correct: 0, explanation: "f(-x)=(-x)²=x²=f(x)." },
            { text: "Область значений y = x²:", options: ["[0;+∞)", "(-∞;+∞)", "(-∞;0]", "{0}"], correct: 0, explanation: "Квадрат всегда неотрицателен." },
            { text: "Нуль функции y = x²:", options: ["0", "1", "-1", "Нет"], correct: 0, explanation: "0²=0." },
            { text: "На каком промежутке y = x² убывает?", options: ["(-∞;0]", "[0;+∞)", "(-∞;+∞)", "Нигде"], correct: 0, explanation: "Убывает до 0." },
            { text: "Значение y = (-3)²:", options: ["9", "-9", "6", "3"], correct: 0, explanation: "9." },
            { text: "Точка пересечения с OY:", options: ["(0;0)", "(0;1)", "(1;0)", "(1;1)"], correct: 0, explanation: "c=0." },
            { text: "График y = x² симметричен относительно...", options: ["Оси Y", "Оси X", "Начала координат", "y=x"], correct: 0, explanation: "Чётная → симметрия относительно оси Y." },
            { text: "При x → +∞, y = x² →...", options: ["+∞", "-∞", "0", "1"], correct: 0, explanation: "Стремится к +∞." },
            { text: "Наименьшее значение функции:", options: ["0", "1", "-1", "-∞"], correct: 0, explanation: "Минимум в вершине (0;0)." }
        ]
    },
    { // 6. Степенная y = x³
        name: "Степенная (y = x³)",
        expReward: { theory: 25, test: 35, practice: 60 },
        requiredExp: 600,
        theory: `
            <div class="formula-box">
                <p>🎯 <strong class="highlight">Формула:</strong> y = x³</p>
                <p>📌 <strong>График — это КУБИЧЕСКАЯ ПАРАБОЛА!</strong> Похожа на латинскую букву S.</p>
            </div>
            <div class="important">⚠️ ВАЖНО: Нечётная функция, возрастает на всей числовой прямой!</div>
            <div class="property-grid">
                <div class="property-card"><strong>📍 Точки</strong><span>Проходит через (0;0), (1;1), (-1;-1).</span></div>
                <div class="property-card"><strong>⭐ Чётность</strong><span>Нечётная: симметрична относительно начала координат.</span></div>
                <div class="property-card"><strong>📈 Монотонность</strong><span>Возрастает на всей числовой прямой.</span></div>
                <div class="property-card"><strong>🔄 Точка перегиба</strong><span>В точке (0;0) график меняет изгиб.</span></div>
            </div>
            <div class="formula-list">
                <strong>📐 Дополнительные формулы:</strong>
                <ul>
                    <li>Область значений: (-∞; +∞)</li>
                    <li>При x → +∞, y → +∞; при x → -∞, y → -∞</li>
                </ul>
            </div>
            <div class="example-box" data-example-func="x*x*x">
                <strong>📈 График: y = x³</strong>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
        `,
        testQuestions: [
            { text: "y = x³ — это...", options: ["Кубическая парабола", "Прямая", "Гипербола", "Парабола"], correct: 0, explanation: "Степенная функция с показателем 3." },
            { text: "Функция y = x³ является...", options: ["Нечётной", "Чётной", "Ни той, ни другой", "Периодической"], correct: 0, explanation: "f(-x)=(-x)³=-x³=-f(x)." },
            { text: "Значение y = (-2)³:", options: ["-8", "8", "-6", "6"], correct: 0, explanation: "(-2)³ = -8." },
            { text: "Точка пересечения с осями:", options: ["(0;0)", "(1;1)", "(0;1)", "(1;0)"], correct: 0, explanation: "Проходит через начало координат." },
            { text: "Функция y = x³...", options: ["Возрастает", "Убывает", "Постоянна", "Не монотонна"], correct: 0, explanation: "Возрастает на всей оси." },
            { text: "Область значений y = x³:", options: ["(-∞;+∞)", "[0;+∞)", "(-∞;0]", "{0}"], correct: 0, explanation: "Все действительные числа." },
            { text: "График y = x³ симметричен относительно...", options: ["Начала координат", "Оси Y", "Оси X", "y=x"], correct: 0, explanation: "Нечётная → симметрия относительно (0;0)." },
            { text: "При x → -∞, y = x³ →...", options: ["-∞", "+∞", "0", "1"], correct: 0, explanation: "Стремится к -∞." },
            { text: "Нуль функции:", options: ["0", "1", "-1", "Нет"], correct: 0, explanation: "x=0." },
            { text: "Точка перегиба:", options: ["(0;0)", "(1;1)", "(-1;-1)", "(2;8)"], correct: 0, explanation: "Точка (0;0) — точка перегиба." }
        ]
    },
    { // 7. Квадратный корень
        name: "Квадратный корень",
        expReward: { theory: 20, test: 30, practice: 50 },
        requiredExp: 780,
        theory: `
            <div class="formula-box">
                <p>🎯 <strong class="highlight">Формула:</strong> y = √x</p>
                <p>📌 <strong>График — это ВЕТВЬ ПАРАБОЛЫ!</strong> Только правая половина.</p>
            </div>
            <div class="important">⚠️ ВАЖНО: x ≥ 0! Под корнем не может быть отрицательных чисел!</div>
            <div class="property-grid">
                <div class="property-card"><strong>📍 Область определения</strong><span><strong class="highlight">x ≥ 0</strong> (под корнем не может быть отрицательных чисел!)</span></div>
                <div class="property-card"><strong>🔍 Нули функции</strong><span>Один нуль: x = 0.</span></div>
                <div class="property-card"><strong>⭐ Чётность</strong><span>Ни чётная, ни нечётная (область не симметрична).</span></div>
                <div class="property-card"><strong>📈 Монотонность</strong><span>Возрастает на [0;+∞).</span></div>
            </div>
            <div class="formula-list">
                <strong>📐 Дополнительные формулы:</strong>
                <ul>
                    <li>Обратная функция: y = x² (x ≥ 0)</li>
                    <li>Область значений: [0; +∞)</li>
                </ul>
            </div>
            <div class="example-box" data-example-func="Math.sqrt(x)">
                <strong>📈 График: y = √x</strong>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
        `,
        testQuestions: [
            { text: "Область определения y = √x:", options: ["[0;+∞)", "(-∞;+∞)", "(0;+∞)", "(-∞;0]"], correct: 0, explanation: "Под корнем неотрицательное число." },
            { text: "Значение √9 =", options: ["3", "-3", "±3", "9"], correct: 0, explanation: "Арифметический корень." },
            { text: "Функция y = √x является...", options: ["Ни четной, ни нечетной", "Четной", "Нечетной", "Периодической"], correct: 0, explanation: "Область определения не симметрична." },
            { text: "График y = √x — это...", options: ["Ветвь параболы", "Прямая", "Гипербола", "Кубическая"], correct: 0, explanation: "Ветвь параболы y=x²." },
            { text: "Нуль функции:", options: ["0", "1", "-1", "Нет"], correct: 0, explanation: "√0 = 0." },
            { text: "y = √x возрастает на...", options: ["[0;+∞)", "(-∞;0]", "(-∞;+∞)", "Нигде"], correct: 0, explanation: "Возрастает." },
            { text: "Значение √(0.25) =", options: ["0.5", "0.05", "0.25", "2.5"], correct: 0, explanation: "0.5²=0.25." },
            { text: "Область значений y = √x:", options: ["[0;+∞)", "(-∞;+∞)", "(-∞;0]", "Все числа"], correct: 0, explanation: "Неотрицательные числа." },
            { text: "При x → +∞, y = √x →...", options: ["+∞", "0", "1", "-∞"], correct: 0, explanation: "Растёт неограниченно." },
            { text: "Функция y = √x является обратной к...", options: ["y = x² (x≥0)", "y = x²", "y = x³", "y = |x|"], correct: 0, explanation: "Обратная к x² на [0;∞)." }
        ]
    },
    { // 8. Модуль
        name: "Модуль",
        expReward: { theory: 20, test: 30, practice: 50 },
        requiredExp: 980,
        theory: `
            <div class="formula-box">
                <p>🎯 <strong class="highlight">Формула:</strong> y = |x|</p>
                <p>📌 <strong>График — это «ГАЛОЧКА»!</strong> Похожа на букву V.</p>
            </div>
            <div class="important">⚠️ ВАЖНО: |x| = x при x ≥ 0, |x| = -x при x < 0!</div>
            <div class="property-grid">
                <div class="property-card"><strong>📍 Вершина</strong><span>В точке (0;0) — самый низ.</span></div>
                <div class="property-card"><strong>🔍 Нули функции</strong><span>Один нуль: x = 0.</span></div>
                <div class="property-card"><strong>⭐ Чётность</strong><span>Чётная: симметрична относительно оси Y.</span></div>
                <div class="property-card"><strong>📈 Монотонность</strong><span>Убывает на (-∞;0], возрастает на [0;+∞).</span></div>
            </div>
            <div class="formula-list">
                <strong>📐 Дополнительные формулы:</strong>
                <ul>
                    <li>|x| = √(x²)</li>
                    <li>|a·b| = |a|·|b|</li>
                    <li>|a + b| ≤ |a| + |b| (неравенство треугольника)</li>
                </ul>
            </div>
            <div class="example-box" data-example-func="Math.abs(x)">
                <strong>📈 График: y = |x|</strong>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
            <div class="example-box" data-example-func="Math.abs(x-2)+1">
                <strong>🔄 Пример сдвига: y = |x-2| + 1</strong>
                <p>Сдвиг вправо на 2 и вверх на 1 → вершина в (2;1)</p>
                <div class="example-graph"><canvas class="example-canvas" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas></div>
            </div>
        `,
        testQuestions: [
            { text: "График |x| имеет вершину в...", options: ["(0;0)", "(0;1)", "(1;0)", "(1;1)"], correct: 0, explanation: "Вершина в начале координат." },
            { text: "Функция y = |x| является...", options: ["Чётной", "Нечётной", "Ни той, ни другой", "Периодической"], correct: 0, explanation: "| -x | = |x|." },
            { text: "Значение | -5 | =", options: ["5", "-5", "0", "1"], correct: 0, explanation: "Модуль числа." },
            { text: "y = |x| убывает на...", options: ["(-∞;0]", "[0;+∞)", "(-∞;+∞)", "Нигде"], correct: 0, explanation: "Убывает до 0." },
            { text: "Нуль функции:", options: ["0", "1", "-1", "Нет"], correct: 0, explanation: "|0|=0." },
            { text: "y = |x| при x < 0 равна...", options: ["-x", "x", "0", "1"], correct: 0, explanation: "|x| = -x для x<0." },
            { text: "Область значений y = |x|:", options: ["[0;+∞)", "(-∞;+∞)", "(-∞;0]", "{0}"], correct: 0, explanation: "Неотрицательные числа." },
            { text: "График y = |x-2| сдвинут...", options: ["Вправо на 2", "Влево на 2", "Вверх на 2", "Вниз на 2"], correct: 0, explanation: "Сдвиг вправо." },
            { text: "y = |x| + 1 сдвинут...", options: ["Вверх", "Вниз", "Вправо", "Влево"], correct: 0, explanation: "+1 сдвиг вверх." },
            { text: "Количество корней |x| = 0:", options: ["1", "0", "2", "3"], correct: 0, explanation: "x=0." }
        ]
    }
];

// ==================== ПРАКТИЧЕСКИЕ ЗАДАНИЯ ====================
const practiceTasks = {
    0: [ // Линейная функция
        { targetFunc: "2*x+1", description: "Прямая, проходящая через точки (0;1) и (1;3)", hint: "k=2, b=1" },
        { targetFunc: "-x+3", description: "Прямая, проходящая через точки (0;3) и (3;0)", hint: "убывающая прямая, k=-1, b=3" },
        { targetFunc: "0.5*x-2", description: "Прямая, проходящая через точки (0;-2) и (4;0)", hint: "прямая с пологим наклоном, k=0.5, b=-2" },
        { targetFunc: "4", description: "Горизонтальная прямая на уровне y=4", hint: "горизонтальная прямая, k=0, b=4" },
        { targetFunc: "-2*x", description: "Прямая, проходящая через начало координат и точку (1;-2)", hint: "проходит через начало координат, k=-2" }
    ],
    1: [ // Квадратичная функция
        { targetFunc: "x*x-2*x-3", description: "Парабола с корнями -1 и 3, вершина в (1;-4)", hint: "парабола ветвями вверх, корни -1 и 3" },
        { targetFunc: "-x*x+4*x-3", description: "Парабола с вершиной в (2;1), ветви вниз", hint: "парабола ветвями вниз, вершина в x=2" },
        { targetFunc: "x*x-4", description: "Парабола с корнями -2 и 2, вершина в (0;-4)", hint: "парабола с корнями ±2, вершина в (0;-4)" },
        { targetFunc: "2*x*x-8*x+6", description: "Парабола с вершиной в (2;-2), ветви вверх", hint: "ветви вверх, вершина в x=2, y=-2" },
        { targetFunc: "-x*x+2*x", description: "Парабола с максимумом в (1;1), корни 0 и 2", hint: "парабола с максимумом в x=1, корни 0 и 2" }
    ],
    2: [ // Обратная пропорциональность
        { targetFunc: "3/x", description: "Гипербола, ветви в I и III четвертях, проходит через (1;3)", hint: "гипербола в I и III четвертях, k=3" },
        { targetFunc: "-2/x", description: "Гипербола, ветви во II и IV четвертях, проходит через (1;-2)", hint: "гипербола во II и IV четвертях, k=-2" },
        { targetFunc: "1/x", description: "Гипербола, ветви в I и III четвертях, проходит через (1;1)", hint: "классическая гипербола, k=1" },
        { targetFunc: "5/x", description: "Гипербола, ветви в I и III четвертях, проходит через (1;5)", hint: "гипербола с k=5" },
        { targetFunc: "-4/x", description: "Гипербола, ветви во II и IV четвертях, проходит через (1;-4)", hint: "гипербола с k=-4" }
    ],
    3: [ // y = x
        { targetFunc: "x", description: "Прямая под углом 45°, проходит через начало координат", hint: "прямая под 45°, проходит через (0;0)" },
        { targetFunc: "x+2", description: "Прямая, параллельная y=x, сдвинутая вверх на 2", hint: "сдвиг вверх на 2" },
        { targetFunc: "x-3", description: "Прямая, параллельная y=x, сдвинутая вниз на 3", hint: "сдвиг вниз на 3" },
        { targetFunc: "2*x", description: "Прямая, проходящая через (0;0) и (1;2), более крутая", hint: "более крутая прямая, k=2" },
        { targetFunc: "0.5*x", description: "Прямая, проходящая через (0;0) и (2;1), более пологая", hint: "более пологая прямая, k=0.5" }
    ],
    4: [ // y = x²
        { targetFunc: "x*x", description: "Парабола с вершиной в (0;0), ветви вверх", hint: "парабола через (0;0), ветви вверх" },
        { targetFunc: "x*x+2", description: "Парабола с вершиной в (0;2), ветви вверх", hint: "сдвиг вверх на 2" },
        { targetFunc: "x*x-4", description: "Парабола с вершиной в (0;-4), корни -2 и 2", hint: "сдвиг вниз на 4, корни ±2" },
        { targetFunc: "2*x*x", description: "Узкая парабола с вершиной в (0;0)", hint: "более узкая парабола, a=2" },
        { targetFunc: "0.5*x*x", description: "Широкая парабола с вершиной в (0;0)", hint: "более широкая парабола, a=0.5" }
    ],
    5: [ // y = x³
        { targetFunc: "x*x*x", description: "Кубическая парабола, проходит через (0;0), (1;1), (-1;-1)", hint: "кубическая парабола, проходит через (0;0)" },
        { targetFunc: "x*x*x-2*x", description: "Кубическая парабола с двумя экстремумами", hint: "кубическая с двумя экстремумами" },
        { targetFunc: "2*x*x*x", description: "Кубическая парабола, более крутая, проходит через (1;2)", hint: "более крутая кубическая" },
        { targetFunc: "-x*x*x", description: "Кубическая парабола, отражённая относительно оси X", hint: "отражение относительно OX" },
        { targetFunc: "x*x*x+3*x", description: "Возрастающая кубическая парабола", hint: "возрастающая кубическая" }
    ],
    6: [ // Квадратный корень
        { targetFunc: "Math.sqrt(x)", description: "График начинается в (0;0), растёт всё медленнее", hint: "корень из x, x≥0" },
        { targetFunc: "Math.sqrt(x)+2", description: "График начинается в (0;2), растёт медленно", hint: "сдвиг вверх на 2" },
        { targetFunc: "2*Math.sqrt(x)", description: "График начинается в (0;0), растёт быстрее", hint: "растяжение по y" },
        { targetFunc: "Math.sqrt(x-2)", description: "График начинается в (2;0), определён при x≥2", hint: "сдвиг вправо на 2" },
        { targetFunc: "Math.sqrt(x+1)", description: "График начинается в (-1;0), определён при x≥-1", hint: "сдвиг влево на 1" }
    ],
    7: [ // Модуль
        { targetFunc: "Math.abs(x)", description: "График в виде галочки с вершиной в (0;0)", hint: "галочка, вершина в (0;0)" },
        { targetFunc: "Math.abs(x)+1", description: "График в виде галочки с вершиной в (0;1)", hint: "сдвиг вверх на 1" },
        { targetFunc: "Math.abs(x-2)", description: "График в виде галочки с вершиной в (2;0)", hint: "сдвиг вправо на 2" },
        { targetFunc: "2*Math.abs(x)", description: "Более крутая галочка с вершиной в (0;0)", hint: "более крутая галочка" },
        { targetFunc: "Math.abs(x+1)-2", description: "Галочка с вершиной в (-1;-2)", hint: "сдвиг влево на 1 и вниз на 2" }
    ]
};

// ==================== ДОСТИЖЕНИЯ (РЕАЛЬНЫЕ ЦЕЛИ) ====================
const achievements = [
    { id: "first_theory", name: "📖 Первые шаги", description: "Изучить первую тему", icon: "📖", requirement: { type: "theory", level: 0 } },
    { id: "first_test", name: "🎯 Знаток", description: "Правильно ответить на все вопросы первого теста", icon: "🎯", requirement: { type: "test", level: 0 } },
    { id: "first_practice", name: "🎮 Мастер графиков", description: "Выполнить первую практику", icon: "🎮", requirement: { type: "practice", level: 0 } },
    { id: "three_stars", name: "⭐ Звёздный час", description: "Получить 3 звезды на любом уровне", icon: "⭐⭐⭐", requirement: { type: "stars", count: 3 } },
    { id: "perfect_level", name: "🏆 Покоритель функций", description: "Полностью пройти любой уровень (3 звезды)", icon: "🏆", requirement: { type: "perfect", level: null } },
    { id: "practice_5", name: "🔧 Ученик", description: "Выполнить 5 заданий практики", icon: "🔧", requirement: { type: "practice_count", count: 5 } },
    { id: "practice_10", name: "📐 Практикант", description: "Выполнить 10 заданий практики", icon: "📐", requirement: { type: "practice_count", count: 10 } },
    { id: "practice_20", name: "⚡ Мастер", description: "Выполнить 20 заданий практики", icon: "⚡", requirement: { type: "practice_count", count: 20 } },
    { id: "practice_30", name: "💎 Эксперт", description: "Выполнить 30 заданий практики", icon: "💎", requirement: { type: "practice_count", count: 30 } },
    { id: "practice_all", name: "👑 Абсолютный чемпион", description: "Выполнить ВСЕ 40 заданий практики", icon: "👑", requirement: { type: "practice_count", count: 40 } },
    { id: "all_unlocked", name: "🔓 Исследователь", description: "Открыть все уровни", icon: "🔓", requirement: { type: "all_unlocked" } },
    { id: "completionist", name: "🌟 Завершитель", description: "Полностью пройти все 8 уровней", icon: "🌟", requirement: { type: "complete_all" } }
];

let earnedAchievements = JSON.parse(localStorage.getItem("graphGameAchievements")) || [];

function checkAchievements() {
    const newAchievements = [];
    
    // Подсчёт выполненных заданий практики
    let totalPracticeTasks = 0;
    let perfectLevels = 0;
    
    for (let i = 0; i < levelsData.length; i++) {
        const comp = userProgress.completedTests[i] || {};
        const stars = userProgress.stars[i] || 0;
        
        if (stars === 3) perfectLevels++;
        
        if (comp.practiceTasks) {
            totalPracticeTasks += Object.values(comp.practiceTasks).filter(v => v === true).length;
        }
    }
    
    // Проверка каждого достижения
    for (const ach of achievements) {
        if (earnedAchievements.includes(ach.id)) continue;
        
        let earned = false;
        
        switch (ach.requirement.type) {
            case "theory":
                if (userProgress.completedTests[0]?.theoryViewed) earned = true;
                break;
            case "test":
                if (userProgress.completedTests[0]?.test) earned = true;
                break;
            case "practice":
                if (userProgress.completedTests[0]?.practice) earned = true;
                break;
            case "stars":
                let hasThreeStars = Object.values(userProgress.stars).some(s => s === 3);
                if (hasThreeStars) earned = true;
                break;
            case "perfect":
                for (let i = 0; i < levelsData.length; i++) {
                    if (userProgress.stars[i] === 3) {
                        earned = true;
                        break;
                    }
                }
                break;
            case "practice_count":
                if (totalPracticeTasks >= ach.requirement.count) earned = true;
                break;
            case "all_unlocked":
                if (userProgress.unlockedLevels === levelsData.length) earned = true;
                break;
            case "complete_all":
                let allCompleted = true;
                for (let i = 0; i < levelsData.length; i++) {
                    const comp = userProgress.completedTests[i] || {};
                    if (!(comp.theoryViewed && comp.test && comp.practice)) {
                        allCompleted = false;
                        break;
                    }
                }
                if (allCompleted) earned = true;
                break;
        }
        
        if (earned) {
            newAchievements.push(ach);
            earnedAchievements.push(ach.id);
        }
    }
    
    if (newAchievements.length > 0) {
        localStorage.setItem("graphGameAchievements", JSON.stringify(earnedAchievements));
        showAchievementNotification(newAchievements);
        renderAchievements();
    }
}

function showAchievementNotification(newAchievements) {
    for (const ach of newAchievements) {
        const notification = document.createElement("div");
        notification.className = "achievement-notification";
        notification.innerHTML = `
            <div class="achievement-notification-icon">${ach.icon}</div>
            <div class="achievement-notification-content">
                <div class="achievement-notification-title">🏆 Достижение разблокировано!</div>
                <div class="achievement-notification-name">${ach.name}</div>
                <div class="achievement-notification-desc">${ach.description}</div>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add("show");
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove("show");
            setTimeout(() => notification.remove(), 500);
        }, 4000);
    }
}

function renderAchievements() {
    const achievementsPanel = document.getElementById("achievementsPanel");
    if (!achievementsPanel) return;
    
    let totalPracticeTasks = 0;
    for (let i = 0; i < levelsData.length; i++) {
        const comp = userProgress.completedTests[i] || {};
        if (comp.practiceTasks) {
            totalPracticeTasks += Object.values(comp.practiceTasks).filter(v => v === true).length;
        }
    }
    
    let html = `<div class="achievements-grid">`;
    for (const ach of achievements) {
        const isEarned = earnedAchievements.includes(ach.id);
        let progressText = "";
        
        if (ach.requirement.type === "practice_count" && !isEarned) {
            progressText = `<div class="achievement-progress">📊 ${totalPracticeTasks}/${ach.requirement.count}</div>`;
        }
        
        html += `
            <div class="achievement-card ${isEarned ? 'earned' : 'locked'}">
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-name">${ach.name}</div>
                <div class="achievement-desc">${ach.description}</div>
                ${progressText}
                ${!isEarned ? '<div class="achievement-lock">🔒</div>' : '<div class="achievement-check">✅</div>'}
            </div>
        `;
    }
    html += `</div>`;
    achievementsPanel.innerHTML = html;
}

// ==================== СОСТОЯНИЕ ИГРЫ ====================
let userProgress = JSON.parse(localStorage.getItem("graphGameProgress")) || { 
    stars: {}, 
    completedTests: {},
    exp: 0,
    unlockedLevels: 1
};

function initProgress() {
    for (let i = 0; i < levelsData.length; i++) {
        if (userProgress.stars[i] === undefined) userProgress.stars[i] = 0;
        if (!userProgress.completedTests[i]) userProgress.completedTests[i] = { 
            test: false, 
            practice: false, 
            theoryViewed: false,
            practiceTasks: {}
        };
        if (!userProgress.completedTests[i].practiceTasks) {
            userProgress.completedTests[i].practiceTasks = {};
        }
        for (let t = 0; t < (practiceTasks[i]?.length || 0); t++) {
            if (userProgress.completedTests[i].practiceTasks[t] === undefined) {
                userProgress.completedTests[i].practiceTasks[t] = false;
            }
        }
    }
    if (userProgress.unlockedLevels === undefined) userProgress.unlockedLevels = 1;
    if (userProgress.exp === undefined) userProgress.exp = 0;
}
initProgress();

let currentLevel = 0;
let currentTab = 'theory';

// DOM элементы
const levelsListDiv = document.getElementById("levelsList");
const theoryTabDiv = document.getElementById("theoryTab");
const testTabDiv = document.getElementById("testTab");
const practiceTabDiv = document.getElementById("practiceTab");
const currentLevelDisplay = document.getElementById("currentLevelDisplay");
const starsCountSpan = document.getElementById("starsCount");
const totalProgressFill = document.getElementById("totalProgressFill");
const totalProgressText = document.getElementById("totalProgressText");
const expValueSpan = document.getElementById("expValue");
const expNextSpan = document.getElementById("expNext");
const expBarFill = document.getElementById("expBarFill");

function getExpForNextLevel() {
    let unlocked = Math.max(1, userProgress.unlockedLevels);
    return 100 + 50 * (unlocked - 1);
}

function updateExpUI() {
    expValueSpan.textContent = userProgress.exp;
    const expNeeded = getExpForNextLevel();
    expNextSpan.textContent = expNeeded;
    const percent = Math.min(100, (userProgress.exp / expNeeded) * 100);
    expBarFill.style.width = `${percent}%`;
}

function addExp(amount) {
    userProgress.exp += amount;
    localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
    updateExpUI();
    checkLevelUnlocks();
    checkAchievements();
}

function checkLevelUnlocks() {
    let newUnlocked = userProgress.unlockedLevels;
    for (let i = userProgress.unlockedLevels; i < levelsData.length; i++) {
        if (userProgress.exp >= levelsData[i].requiredExp) {
            newUnlocked = i + 1;
        } else break;
    }
    if (newUnlocked > userProgress.unlockedLevels) {
        userProgress.unlockedLevels = newUnlocked;
        localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
        checkAchievements();
    }
    renderSidebar();
    updateTotalProgress();
}

function recalcStars(levelIdx) {
    const comp = userProgress.completedTests[levelIdx];
    if (!comp) return;
    let stars = (comp.theoryViewed ? 1 : 0) + (comp.test ? 1 : 0) + (comp.practice ? 1 : 0);
    userProgress.stars[levelIdx] = Math.min(stars, 3);
    localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
    updateHeaderInfo();
    updateTabIconsStatus(levelIdx);
    checkAchievements();
}

function updateHeaderInfo() {
    currentLevelDisplay.innerText = `Уровень ${currentLevel + 1}: ${levelsData[currentLevel].name}`;
    starsCountSpan.innerText = `⭐ ${userProgress.stars[currentLevel] || 0}/3`;
}

function updateTabIconsStatus(levelIdx) {
    const comp = userProgress.completedTests[levelIdx] || {};
    const theoryBtn = document.getElementById("tabTheory");
    const testBtn = document.getElementById("tabTest");
    const practiceBtn = document.getElementById("tabPractice");
    
    if (theoryBtn) {
        if (comp.theoryViewed) theoryBtn.classList.add("completed-theory");
        else theoryBtn.classList.remove("completed-theory");
    }
    if (testBtn) {
        if (comp.test) testBtn.classList.add("completed-test");
        else testBtn.classList.remove("completed-test");
    }
    if (practiceBtn) {
        if (comp.practice) practiceBtn.classList.add("completed-practice");
        else practiceBtn.classList.remove("completed-practice");
    }
}

function updateBlockProgress() {
    const comp = userProgress.completedTests[currentLevel] || {};
    let completed = (comp.theoryViewed ? 1 : 0) + (comp.test ? 1 : 0) + (comp.practice ? 1 : 0);
    const percent = Math.floor(completed / 3 * 100);
    const progressDiv = document.querySelector(".block-progress");
    if (progressDiv) {
        const fill = progressDiv.querySelector(".block-progress-fill");
        if (fill) fill.style.width = `${percent}%`;
        const span = progressDiv.querySelector("span:first-child");
        if (span) span.innerHTML = `${completed}/3 заданий`;
    }
    updateTabIconsStatus(currentLevel);
}

function updateTotalProgress() {
    let totalCompleted = 0;
    for (let i = 0; i < levelsData.length; i++) {
        const comp = userProgress.completedTests[i] || {};
        if (comp.theoryViewed && comp.test && comp.practice) totalCompleted++;
    }
    const percent = Math.floor((totalCompleted / levelsData.length) * 100);
    totalProgressFill.style.width = `${percent}%`;
    totalProgressText.innerText = `${percent}% завершено (${totalCompleted}/${levelsData.length} уровней)`;
}

function renderSidebar() {
    levelsListDiv.innerHTML = "";
    for (let idx = 0; idx < levelsData.length; idx++) {
        const level = levelsData[idx];
        const isUnlocked = idx < userProgress.unlockedLevels;
        const comp = userProgress.completedTests[idx] || {};
        const isComplete = comp.theoryViewed && comp.test && comp.practice;
        
        const btn = document.createElement("button");
        btn.className = `level-btn ${currentLevel === idx ? "active" : ""} ${!isUnlocked ? "locked" : ""}`;
        
        btn.innerHTML = `
            <div class="level-number ${isComplete ? "completed" : ""} ${!isUnlocked ? "locked" : ""}">${idx + 1}</div>
            <div class="level-name">${level.name}</div>
            ${!isUnlocked ? '<span class="lock-icon">🔒</span>' : ''}
        `;
        
        if (isUnlocked) {
            btn.addEventListener("click", () => {
                currentLevel = idx;
                renderSidebar();
                renderAllTabs();
                updateHeaderInfo();
                updateBlockProgress();
                updateTabIconsStatus(currentLevel);
                document.querySelector(`.game-tab-btn[data-tab="${currentTab}"]`)?.click();
            });
        }
        
        levelsListDiv.appendChild(btn);
    }
    updateTotalProgress();
}

// ==================== ФУНКЦИИ ДЛЯ ГРАФИКОВ ====================
const axesPlugin = {
    id: 'axesLines',
    afterDraw(chart) {
        const { ctx, chartArea, scales } = chart;
        const xAxis = scales.x;
        const yAxis = scales.y;
        
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#ff6666';
        ctx.lineWidth = 2;
        
        const xZero = xAxis.getPixelForValue(0);
        if (xZero >= chartArea.left && xZero <= chartArea.right) {
            ctx.moveTo(xZero, chartArea.top);
            ctx.lineTo(xZero, chartArea.bottom);
            ctx.stroke();
        }
        
        const yZero = yAxis.getPixelForValue(0);
        if (yZero >= chartArea.top && yZero <= chartArea.bottom) {
            ctx.moveTo(chartArea.left, yZero);
            ctx.lineTo(chartArea.right, yZero);
            ctx.stroke();
        }
        
        ctx.restore();
    }
};

Chart.register(axesPlugin);

function evaluateFunction(funcStr, x) {
    const fn = new Function('x', 'return ' + funcStr);
    return fn(x);
}

function drawGraph(canvas, funcStr, xMin = -9, xMax = 9, yMin = -9, yMax = 9, color = '#ffa500', label = 'График') {
    if (!canvas) return null;
    
    if (canvas.chart) {
        try { canvas.chart.destroy(); } catch(e) {}
        canvas.chart = null;
    }
    
    try {
        const points = [];
        const step = 0.15;
        
        for (let x = xMin; x <= xMax; x += step) {
            let y;
            try {
                if (funcStr.includes('sqrt') && x < 0) continue;
                y = evaluateFunction(funcStr, x);
            } catch(e) {
                continue;
            }
            
            if (typeof y === 'number' && isFinite(y) && !isNaN(y) && Math.abs(y) < 100) {
                points.push({ x, y });
            }
        }
        
        if (points.length < 2) return null;
        
        const chart = new Chart(canvas, {
            type: 'scatter',
            data: {
                datasets: [{
                    label: label,
                    data: points,
                    borderColor: color,
                    backgroundColor: 'transparent',
                    borderWidth: 2.5,
                    pointRadius: 0,
                    pointHoverRadius: 3,
                    showLine: true,
                    tension: 0.1,
                    order: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: false,
                plugins: {
                    legend: { 
                        labels: { color: '#ffd966', font: { size: 11 } },
                        position: 'top'
                    },
                    tooltip: { 
                        callbacks: { 
                            label: (ctx) => {
                                if (ctx.parsed.x === undefined || ctx.parsed.y === undefined) return '';
                                return `(${ctx.parsed.x.toFixed(2)}, ${ctx.parsed.y.toFixed(2)})`;
                            }
                        } 
                    }
                },
                scales: {
                    x: { 
                        title: { display: true, text: 'x', color: '#ffd966' }, 
                        min: xMin, max: xMax,
                        grid: { 
                            color: (ctx) => Math.abs(ctx.tick.value) < 0.001 ? '#ff6666' : '#3a4a55',
                            lineWidth: 1
                        },
                        ticks: { color: '#ccc', stepSize: 2, callback: (v) => Math.abs(v) < 0.001 ? "0" : v }
                    },
                    y: { 
                        title: { display: true, text: 'y', color: '#ffd966' }, 
                        min: yMin, max: yMax,
                        grid: { 
                            color: (ctx) => Math.abs(ctx.tick.value) < 0.001 ? '#ff6666' : '#3a4a55',
                            lineWidth: 1
                        },
                        ticks: { color: '#ccc', stepSize: 2, callback: (v) => Math.abs(v) < 0.001 ? "0" : v }
                    }
                }
            }
        });
        
        canvas.chart = chart;
        return chart;
    } catch(e) { 
        console.warn("Ошибка графика", funcStr, e); 
        return null; 
    }
}

// ==================== РЕНДЕР ТЕОРИИ ====================
function markTheoryViewed() {
    const comp = userProgress.completedTests[currentLevel];
    if (!comp.theoryViewed) {
        comp.theoryViewed = true;
        addExp(levelsData[currentLevel].expReward.theory);
        localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
        recalcStars(currentLevel);
        updateBlockProgress();
        renderTheory();
        checkAchievements();
    }
}

function renderTheory() {
    const level = levelsData[currentLevel];
    const comp = userProgress.completedTests[currentLevel] || {};
    const completedCount = (comp.theoryViewed ? 1 : 0) + (comp.test ? 1 : 0) + (comp.practice ? 1 : 0);
    const percent = Math.floor(completedCount / 3 * 100);
    
    theoryTabDiv.innerHTML = `<div class="block-card"><h3>📖 ${level.name}<div class="block-progress"><span>${completedCount}/3 заданий</span><div class="block-progress-bar"><div class="block-progress-fill" style="width: ${percent}%"></div></div></div></h3><div class="theory-content">${level.theory}</div><button id="markTheoryBtn" class="check-practice" style="background:#2ecc71;margin-top:10px;border:none;padding:8px 20px;border-radius:25px;font-weight:bold;cursor:pointer;color:white;" ${comp.theoryViewed ? "disabled style='opacity:0.6'" : ""}>${comp.theoryViewed ? "✅ Теория изучена! (+" + level.expReward.theory + " опыта)" : "✅ Отметить теорию (+" + level.expReward.theory + " опыта)"}</button></div>`;
    
    setTimeout(() => {
        theoryTabDiv.querySelectorAll('.example-box').forEach(box => {
            const funcStr = box.getAttribute('data-example-func');
            const canvas = box.querySelector('.example-canvas');
            if (funcStr && canvas) {
                drawGraph(canvas, funcStr, -9, 9, -9, 9, '#ffa500', 'График функции');
            }
        });
    }, 100);
    
    document.getElementById("markTheoryBtn")?.addEventListener("click", () => { markTheoryViewed(); renderTheory(); });
    if (window.MathJax) MathJax.typesetPromise();
}

// ==================== РЕНДЕР ТЕСТА ====================
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function renderTest() {
    const level = levelsData[currentLevel];
    const comp = userProgress.completedTests[currentLevel] || {};
    const completedCount = (comp.theoryViewed ? 1 : 0) + (comp.test ? 1 : 0) + (comp.practice ? 1 : 0);
    const percent = Math.floor(completedCount / 3 * 100);
    const icons = ["🤔", "📐", "🔍", "🎯", "⭐", "📊", "🧮", "💡", "📈", "🎲"];
    
    const shuffledQuestions = level.testQuestions.map((q, idx) => {
        const optionsWithIndices = q.options.map((opt, optIdx) => ({ text: opt, originalIndex: optIdx }));
        const shuffledOptions = shuffleArray([...optionsWithIndices]);
        const newCorrectIndex = shuffledOptions.findIndex(opt => opt.originalIndex === q.correct);
        return {
            text: q.text,
            options: shuffledOptions.map(opt => opt.text),
            correct: newCorrectIndex,
            explanation: q.explanation,
            originalIndex: idx
        };
    });
    
    let html = `<div class="block-card"><h3>📝 Проверь свои знания! ✨<div class="block-progress"><span>${completedCount}/3 заданий</span><div class="block-progress-bar"><div class="block-progress-fill" style="width: ${percent}%"></div></div></div></h3><div class="test-container">`;
    
    shuffledQuestions.forEach((q, i) => {
        html += `<div class="question-item"><div class="question-text"><span class="question-icon">${icons[i % icons.length]}</span>${i+1}. ${q.text}</div><div class="options">${q.options.map((o, oi) => `<label class="option"><input type="radio" name="q${currentLevel}_${i}" value="${oi}"><span>${String.fromCharCode(65+oi)}. ${o}</span></label>`).join('')}</div><div class="test-feedback" id="fb_${currentLevel}_${i}"></div></div>`;
    });
    
    html += `<button id="submitTestBtn" class="submit-test-btn">✅ Проверить ответы! (+${level.expReward.test} опыта)</button>${comp.test ? '<div class="test-success">🎉 Отлично! Ты прошёл тест! 🎉<br>⭐ Получена звезда за тесты! ⭐</div>' : ''}</div></div>`;
    testTabDiv.innerHTML = html;
    
    document.getElementById("submitTestBtn")?.addEventListener("click", () => {
        let allCorrect = true;
        shuffledQuestions.forEach((q, i) => {
            const selected = document.querySelector(`input[name="q${currentLevel}_${i}"]:checked`);
            const fb = document.getElementById(`fb_${currentLevel}_${i}`);
            if (selected && parseInt(selected.value) === q.correct) {
                fb.innerHTML = `<span class="feedback-icon">✅</span> Верно! ${q.explanation}`;
                fb.className = "test-feedback correct";
            } else {
                const correctLetter = String.fromCharCode(65 + q.correct);
                fb.innerHTML = `<span class="feedback-icon">❌</span> Неправильно. ${q.explanation}<br>📖 Правильный ответ: <strong>${correctLetter}. ${q.options[q.correct]}</strong>`;
                fb.className = "test-feedback wrong";
                allCorrect = false;
            }
        });
        if (allCorrect && !comp.test) {
            comp.test = true;
            addExp(level.expReward.test);
            localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
            recalcStars(currentLevel);
            renderTest();
            updateBlockProgress();
            checkAchievements();
        }
    });
}

// ==================== РЕНДЕР ПРАКТИКИ ====================
function checkPracticeAnswer(levelIdx, taskIndex) {
    const tasks = practiceTasks[levelIdx] || [];
    const task = tasks[taskIndex];
    const input = document.getElementById(`practiceInput_${levelIdx}_${taskIndex}`);
    const feedback = document.getElementById(`practiceFeedback_${levelIdx}_${taskIndex}`);
    const canvas = document.getElementById(`practiceCanvas_${levelIdx}_${taskIndex}`);
    
    if (!input || !task) return;
    
    let userFunc = input.value.trim();
    if (!userFunc) {
        if (feedback) feedback.innerHTML = "❌ Введите функцию!";
        if (feedback) feedback.className = "practice-feedback wrong";
        return;
    }
    
    try {
        const targetFunc = task.targetFunc;
        let correct = true;
        
        for (let x = -8; x <= 8; x += 0.5) {
            if (targetFunc.includes('sqrt') && x < 0) continue;
            if (userFunc.includes('sqrt') && x < 0) continue;
            
            let targetY, userY;
            try {
                targetY = evaluateFunction(targetFunc, x);
                userY = evaluateFunction(userFunc, x);
            } catch(e) {
                correct = false;
                break;
            }
            
            if (isNaN(targetY) && isNaN(userY)) continue;
            if (Math.abs(targetY - userY) > 0.3) {
                correct = false;
                break;
            }
        }
        
        if (correct) {
            if (feedback) {
                feedback.innerHTML = "✅ Правильно! Функция совпадает с целевым графиком! Теперь можно сдать задание.";
                feedback.className = "practice-feedback correct";
            }
            if (canvas && input.value.trim()) {
                drawGraph(canvas, userFunc, -9, 9, -9, 9, '#ffa500', 'Ваш график');
            }
        } else {
            if (feedback) {
                feedback.innerHTML = `❌ Неправильно. Попробуй ещё раз! Подсказка: ${task.hint}`;
                feedback.className = "practice-feedback wrong";
            }
            if (canvas) {
                drawGraph(canvas, task.targetFunc, -9, 9, -9, 9, '#6fbf6f', 'Целевой график');
            }
        }
    } catch(e) {
        if (feedback) {
            feedback.innerHTML = `❌ Ошибка в синтаксисе: ${e.message}`;
            feedback.className = "practice-feedback wrong";
        }
    }
}

function submitPracticeTask(levelIdx, taskIndex) {
    const tasks = practiceTasks[levelIdx] || [];
    const comp = userProgress.completedTests[levelIdx];
    
    if (!comp.practiceTasks) comp.practiceTasks = {};
    
    if (comp.practiceTasks[taskIndex]) return;
    
    const feedback = document.getElementById(`practiceFeedback_${levelIdx}_${taskIndex}`);
    const input = document.getElementById(`practiceInput_${levelIdx}_${taskIndex}`);
    
    if (!input || !input.value.trim()) {
        if (feedback) {
            feedback.innerHTML = "❌ Сначала введи функцию и проверь её!";
            feedback.className = "practice-feedback wrong";
        }
        return;
    }
    
    if (!feedback || !feedback.classList.contains("correct")) {
        feedback.innerHTML = "❌ Сначала проверь функцию (нажми 🔍 Проверить) и убедись, что она правильная!";
        feedback.className = "practice-feedback wrong";
        return;
    }
    
    comp.practiceTasks[taskIndex] = true;
    
    let allCompleted = true;
    for (let i = 0; i < tasks.length; i++) {
        if (!comp.practiceTasks[i]) allCompleted = false;
    }
    
    if (allCompleted && !comp.practice) {
        comp.practice = true;
        addExp(levelsData[levelIdx].expReward.practice);
    }
    
    localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
    recalcStars(levelIdx);
    if (levelIdx === currentLevel) {
        renderPractice();
    }
    updateBlockProgress();
    checkAchievements();
}

function renderPractice() {
    const level = levelsData[currentLevel];
    const comp = userProgress.completedTests[currentLevel] || {};
    const tasks = practiceTasks[currentLevel] || [];
    const completedCount = (comp.theoryViewed ? 1 : 0) + (comp.test ? 1 : 0) + (comp.practice ? 1 : 0);
    const percent = Math.floor(completedCount / 3 * 100);
    
    let html = `<div class="block-card"><h3>🎮 Практика: угадай функцию!<div class="block-progress"><span>${completedCount}/3 заданий</span><div class="block-progress-bar"><div class="block-progress-fill" style="width: ${percent}%"></div></div></div></h3>`;
    html += `<p>📌 <strong>Задание:</strong> Перед тобой график некоторой функции (зелёная линия). Определи её формулу и введи в поле ввода. Твой график будет отображаться оранжевым цветом. Чтобы проверить себя, нажми «🔍 Проверить». После успешной проверки можно сдать задание.</p>`;
    html += `<div class="practice-tasks-container">`;
    
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const isCompleted = comp.practiceTasks?.[i] || false;
        const canvasId = `practiceCanvas_${currentLevel}_${i}`;
        const inputId = `practiceInput_${currentLevel}_${i}`;
        const feedbackId = `practiceFeedback_${currentLevel}_${i}`;
        
        html += `
            <div class="practice-task-item" data-task-index="${i}">
                <div class="practice-task-header">
                    <span class="practice-task-title">Задание ${i+1}</span>
                    <span class="practice-task-status ${isCompleted ? 'completed' : ''}">${isCompleted ? '✅ Выполнено' : '⏳ Не выполнено'}</span>
                </div>
                <div class="practice-graph-container">
                    <div class="target-graph-label">🎯 Определи формулу этого графика:</div>
                    <canvas id="${canvasId}" width="500" height="400" style="width:100%; height:auto; max-width:500px; background:#0a1217; border-radius:10px;"></canvas>
                </div>
                <div class="func-input-area">
                    <input type="text" id="${inputId}" placeholder="Введи формулу функции (например: 2*x+1, x*x, Math.sqrt(x), Math.abs(x))" value="${isCompleted ? task.targetFunc : ''}" ${isCompleted ? 'disabled' : ''}>
                    ${!isCompleted ? '<button class="check-answer-btn" data-level="' + currentLevel + '" data-task="' + i + '">🔍 Проверить</button>' : ''}
                </div>
                <div id="${feedbackId}" class="practice-feedback"></div>
                ${!isCompleted ? '<button class="submit-answer-btn" data-level-submit="' + currentLevel + '" data-task-submit="' + i + '">🏆 Сдать задание</button>' : ''}
            </div>
        `;
    }
    
    html += `</div>`;
    if (comp.practice) {
        html += `<div class="success-message" style="background:#2ecc71;padding:10px;border-radius:12px;text-align:center;margin-top:15px;">✔ Все задания практики выполнены! Молодец! 🌟</div>`;
    }
    html += `</div>`;
    practiceTabDiv.innerHTML = html;
    
    setTimeout(() => {
        for (let i = 0; i < tasks.length; i++) {
            const canvas = document.getElementById(`practiceCanvas_${currentLevel}_${i}`);
            if (canvas) {
                drawGraph(canvas, tasks[i].targetFunc, -9, 9, -9, 9, '#6fbf6f', 'Целевой график');
            }
            
            const checkBtn = document.querySelector(`.check-answer-btn[data-level="${currentLevel}"][data-task="${i}"]`);
            if (checkBtn) {
                checkBtn.removeEventListener('click', () => {});
                checkBtn.addEventListener("click", () => checkPracticeAnswer(currentLevel, i));
            }
            
            const submitBtn = document.querySelector(`.submit-answer-btn[data-level-submit="${currentLevel}"][data-task-submit="${i}"]`);
            if (submitBtn) {
                submitBtn.removeEventListener('click', () => {});
                submitBtn.addEventListener("click", () => submitPracticeTask(currentLevel, i));
            }
            
            const input = document.getElementById(`practiceInput_${currentLevel}_${i}`);
            if (input && !comp.practiceTasks?.[i]) {
                input.removeEventListener('input', () => {});
                input.addEventListener("input", () => {
                    const canvas = document.getElementById(`practiceCanvas_${currentLevel}_${i}`);
                    if (canvas && input.value.trim()) {
                        let userFunc = input.value.trim();
                        drawGraph(canvas, tasks[i].targetFunc, -9, 9, -9, 9, '#6fbf6f', 'Целевой график');
                        setTimeout(() => {
                            drawGraph(canvas, userFunc, -9, 9, -9, 9, '#ffa500', 'Ваш график');
                        }, 50);
                    }
                });
            }
        }
    }, 100);
}

// ==================== МОДАЛЬНОЕ ОКНО ДОСТИЖЕНИЙ ====================
const modal = document.getElementById("achievementsModal");
const showAchievementsBtn = document.getElementById("showAchievementsBtn");
const modalClose = document.querySelector(".modal-close");

function openAchievementsModal() {
    renderAchievements();
    if (modal) modal.style.display = "block";
}

function closeAchievementsModal() {
    if (modal) modal.style.display = "none";
}

if (showAchievementsBtn) {
    showAchievementsBtn.onclick = openAchievementsModal;
}

if (modalClose) {
    modalClose.onclick = closeAchievementsModal;
}

window.onclick = function(event) {
    if (event.target === modal) {
        closeAchievementsModal();
    }
}

// ==================== КНОПКИ СБРОСА СТАТИСТИКИ И ОТКРЫТИЯ ВСЕХ УРОВНЕЙ ====================
function resetAllProgress() {
    if (confirm("⚠️ ВНИМАНИЕ! Это действие удалит весь ваш прогресс: опыт, звёзды, пройденные тесты, практику и достижения. Останется открытым только первый уровень. Вы уверены?")) {
        userProgress = { 
            stars: {}, 
            completedTests: {},
            exp: 0,
            unlockedLevels: 1
        };
        earnedAchievements = [];
        localStorage.removeItem("graphGameAchievements");
        initProgress();
        currentLevel = 0;
        updateExpUI();
        renderSidebar();
        renderAllTabs();
        updateHeaderInfo();
        updateBlockProgress();
        updateTabIconsStatus(0);
        renderAchievements();
        alert("✅ Прогресс полностью сброшен! Открыт только первый уровень. Начинай игру заново.");
    }
}

function unlockAllLevels() {
    if (confirm("🔓 Открыть все уровни? Вы получите доступ ко всем 8 уровням, но ваш опыт и звёзды сохранятся.")) {
        userProgress.unlockedLevels = levelsData.length;
        localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
        renderSidebar();
        checkLevelUnlocks();
        checkAchievements();
        alert("✅ Все уровни открыты! Теперь ты можешь изучать любую тему.");
    }
}

function addControlButtons() {
    const resetBtn = document.getElementById("resetProgressBtn");
    const unlockBtn = document.getElementById("unlockAllBtn");
    
    if (resetBtn) resetBtn.onclick = resetAllProgress;
    if (unlockBtn) unlockBtn.onclick = unlockAllLevels;
}

function renderAllTabs() { 
    renderTheory(); 
    renderTest(); 
    renderPractice(); 
}

function setupTabs() {
    document.querySelectorAll(".game-tab-btn").forEach(btn => {
        btn.onclick = () => {
            const tabId = btn.getAttribute("data-tab");
            document.querySelectorAll(".game-tab-btn").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(`${tabId}Tab`).classList.add("active");
            currentTab = tabId;
            if (tabId === 'practice') renderPractice();
            if (tabId === 'theory' && window.MathJax) MathJax.typesetPromise();
            updateBlockProgress();
        };
    });
    document.querySelector('.game-tab-btn[data-tab="theory"]')?.click();
}

function init() {
    updateExpUI();
    renderSidebar();
    renderAllTabs();
    setupTabs();
    updateHeaderInfo();
    updateBlockProgress();
    checkLevelUnlocks();
    addControlButtons();
    updateTabIconsStatus(currentLevel);
    renderAchievements();
}

init();
// ==================== МОБИЛЬНОЕ МЕНЮ ====================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const levelsSidebar = document.getElementById("levelsSidebar");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");

function openMobileSidebar() {
    if (levelsSidebar) {
        levelsSidebar.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeMobileSidebar() {
    if (levelsSidebar) {
        levelsSidebar.classList.remove("open");
        document.body.style.overflow = "";
    }
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", openMobileSidebar);
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", closeMobileSidebar);
}

// Закрытие сайдбара при клике вне его на мобильных
document.addEventListener("click", function(event) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile && levelsSidebar && levelsSidebar.classList.contains("open")) {
        const isClickInside = levelsSidebar.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn && mobileMenuBtn.contains(event.target);
        if (!isClickInside && !isClickOnMenuBtn) {
            closeMobileSidebar();
        }
    }
});

// При выборе уровня на мобильном - закрываем сайдбар
const originalRenderSidebar = renderSidebar;
window.renderSidebar = function() {
    originalRenderSidebar();
    // Добавляем обработчики для кнопок уровней на мобильных
    document.querySelectorAll(".level-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                closeMobileSidebar();
            }
        });
    });
};
renderSidebar();
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', 'Poppins', 'Roboto', sans-serif;
}

body {
    background: linear-gradient(145deg, #1a2a3a 0%, #0f1a24 100%);
    min-height: 100vh;
    padding: 0;
    margin: 0;
    color: #eee;
}

.game-container {
    width: 100vw;
    height: 100vh;
    max-width: 100%;
    margin: 0;
    background: rgba(255, 255, 255, 0.05);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.game-header {
    background: linear-gradient(135deg, #2c3e4e, #1a2a36);
    padding: 8px 20px;
    border-bottom: 2px solid #ffa500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    flex-shrink: 0;
}

.game-header h1 {
    font-size: 1.2rem;
    background: linear-gradient(45deg, #ffd966, #ffa500);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.level-info {
    display: flex;
    gap: 20px;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 15px;
    border-radius: 30px;
    font-size: 0.85rem;
    flex-wrap: wrap;
}

.exp-info {
    display: flex;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
}

.exp-bar-container {
    width: 100px;
    height: 6px;
    background: #2c3e4e;
    border-radius: 10px;
    overflow: hidden;
}

.exp-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, #ffa500, #ffd966);
    width: 0%;
    border-radius: 10px;
    transition: width 0.3s;
}

.level-info-right {
    display: flex;
    gap: 12px;
    align-items: center;
}

.stars-progress {
    font-size: 0.9rem;
    letter-spacing: 1px;
}

/* Мобильная кнопка меню (скрыта на компьютере) */
.mobile-menu-btn {
    display: none;
}

.close-sidebar-btn {
    display: none;
}

.main-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    flex: 1;
    overflow: hidden;
    min-height: 0;
}

.levels-sidebar {
    background: rgba(0, 0, 0, 0.4);
    padding: 12px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
}

.levels-sidebar h3 {
    margin-bottom: 12px;
    font-size: 1.1rem;
    text-align: center;
    color: #ffd966;
    flex-shrink: 0;
}

.levels-list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 12px;
    overflow-y: auto;
    flex: 1;
    min-height: 0;
}

.level-btn {
    background: #2c3e4e;
    border: none;
    padding: 8px 12px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
}

.level-btn:hover:not(.locked) {
    background: #3e5a6b;
    transform: translateX(3px);
}

.level-btn.locked {
    opacity: 0.5;
    cursor: not-allowed;
    background: #1e2a32;
}

.level-btn.active {
    background: linear-gradient(95deg, #ffa500, #ff7e05);
    box-shadow: 0 2px 6px rgba(255, 165, 0, 0.4);
}

.level-number {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 0.85rem;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
}

.level-number.completed {
    background: #2ecc71;
    color: white;
    box-shadow: 0 0 8px rgba(46, 204, 113, 0.5);
}

.level-number.locked {
    background: #5a5a5a;
}

.level-name {
    font-size: 0.85rem;
    flex: 1;
}

.lock-icon {
    font-size: 0.8rem;
    opacity: 0.7;
}

.total-progress {
    margin-top: 12px;
    background: #1e2a32;
    padding: 6px 10px;
    border-radius: 12px;
    flex-shrink: 0;
}

.progress-bar-bg {
    background: #0f1a1f;
    border-radius: 20px;
    height: 6px;
    overflow: hidden;
    margin-bottom: 4px;
}

.progress-bar-fill {
    background: linear-gradient(90deg, #ffa500, #ffd966);
    width: 0%;
    height: 100%;
    transition: width 0.3s;
    border-radius: 20px;
}

.total-progress span {
    font-size: 0.7rem;
}

.control-buttons {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
    flex-shrink: 0;
}

.control-btn {
    border: none;
    padding: 8px 12px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.8rem;
}

.reset-btn {
    background: #e74c3c;
}

.reset-btn:hover {
    background: #c0392b;
}

.unlock-btn {
    background: #f39c12;
}

.unlock-btn:hover {
    background: #e67e22;
}

.achievements-btn {
    background: linear-gradient(135deg, #f39c12, #e67e22);
}

.achievements-btn:hover {
    background: linear-gradient(135deg, #e67e22, #d35400);
}

.content-area {
    padding: 12px 15px;
    background: rgba(255, 255, 255, 0.03);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    min-height: 0;
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
}

.game-tabs-navigation {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-bottom: 20px;
    flex-shrink: 0;
    background: rgba(0, 0, 0, 0.3);
    padding: 12px 20px;
    border-radius: 20px;
    backdrop-filter: blur(4px);
}

.game-tab-btn {
    background: linear-gradient(135deg, #2c3e4e, #1a2a36);
    border: 2px solid rgba(255, 165, 0, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 14px 28px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    min-width: 100px;
}

.game-tab-btn .tab-icon {
    font-size: 1.8rem;
    filter: drop-shadow(0 0 2px rgba(255, 165, 0, 0.5));
}

.game-tab-btn .tab-label {
    font-size: 1rem;
    font-weight: bold;
}

.game-tab-btn:hover {
    transform: translateY(-3px);
    border-color: #ffa500;
    background: linear-gradient(135deg, #3e5e6e, #2a3a46);
    box-shadow: 0 8px 20px rgba(255, 165, 0, 0.3);
}

.game-tab-btn.active {
    background: linear-gradient(135deg, #ffa500, #ff7e05);
    border-color: #fff0b5;
    box-shadow: 0 0 15px rgba(255, 165, 0, 0.6);
}

.game-tab-btn.completed-theory .tab-icon,
.game-tab-btn.completed-test .tab-icon,
.game-tab-btn.completed-practice .tab-icon {
    filter: drop-shadow(0 0 8px #2ecc71);
    color: #2ecc71;
}

.tab-content {
    display: none;
    animation: fadeIn 0.2s ease;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
}

.tab-content.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
}

.block-card {
    background: rgba(30, 40, 50, 0.7);
    backdrop-filter: blur(4px);
    border-radius: 16px;
    padding: 15px 18px;
    margin-bottom: 15px;
    border-left: 4px solid #ffa500;
    max-width: 100%;
}

.block-card h3 {
    color: #ffd966;
    margin-bottom: 12px;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;
    justify-content: space-between;
}

.block-progress {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
    padding: 4px 10px;
    font-size: 0.7rem;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.block-progress-bar {
    width: 100px;
    height: 4px;
    background: #2c3e4e;
    border-radius: 4px;
    overflow: hidden;
}

.block-progress-fill {
    height: 100%;
    background: #ffa500;
    border-radius: 4px;
    transition: width 0.3s;
}

.theory-content {
    line-height: 1.6;
    font-size: 0.95rem;
}

.theory-content p {
    margin: 12px 0;
}

.theory-content .formula-box {
    background: linear-gradient(135deg, #0f1a1f, #1a2a2f);
    padding: 15px 20px;
    border-radius: 16px;
    margin: 15px 0;
    text-align: center;
    border: 2px solid #ffa500;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.theory-content .important {
    background: rgba(231, 76, 60, 0.3);
    border-left: 4px solid #e74c3c;
    padding: 10px 15px;
    margin: 12px 0;
    border-radius: 8px;
    font-weight: bold;
}

.theory-content .property-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 12px;
    margin: 15px 0;
}

.theory-content .property-card {
    background: rgba(0, 0, 0, 0.4);
    border-radius: 12px;
    padding: 10px 14px;
    border-left: 3px solid #ffa500;
}

.theory-content .property-card strong {
    color: #ffd966;
    display: block;
    font-size: 0.9rem;
    margin-bottom: 6px;
}

.theory-content .example-box {
    background: rgba(255, 165, 0, 0.15);
    border-left: 4px solid #ffa500;
    padding: 12px 15px;
    margin: 15px 0;
    border-radius: 12px;
}

.theory-content .example-graph {
    margin-top: 10px;
    background: #0a1217;
    border-radius: 12px;
    padding: 10px;
    text-align: center;
}

.theory-content .example-graph canvas {
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 280px;
    background: #0a1217;
    border-radius: 10px;
    display: inline-block;
}

.theory-content .formula-list {
    background: rgba(0, 0, 0, 0.3);
    padding: 12px;
    border-radius: 12px;
    margin: 12px 0;
}

.theory-content .formula-list li {
    margin: 8px 0;
    font-family: monospace;
    font-size: 0.9rem;
}

.theory-content .highlight {
    background: rgba(255, 165, 0, 0.25);
    padding: 3px 10px;
    border-radius: 12px;
    font-weight: bold;
    color: #ffd966;
    display: inline-block;
}

.practice-tasks-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.practice-task-item {
    background: linear-gradient(135deg, #1e2f3a, #16242e);
    border-radius: 16px;
    padding: 15px;
    border: 1px solid rgba(255, 165, 0, 0.3);
}

.practice-task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
    gap: 10px;
}

.practice-task-title {
    font-weight: bold;
    color: #ffd966;
    font-size: 1rem;
}

.practice-task-status {
    font-size: 0.75rem;
    padding: 3px 10px;
    border-radius: 20px;
    background: rgba(0,0,0,0.5);
}

.practice-task-status.completed {
    background: #2ecc71;
    color: white;
}

.practice-graph-container {
    background: #0a1217;
    border-radius: 12px;
    padding: 10px;
    margin: 12px 0;
    text-align: center;
}

.practice-graph-container canvas {
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 280px;
    background: #0a1217;
    border-radius: 10px;
    display: inline-block;
}

.target-graph-label {
    text-align: center;
    font-size: 0.7rem;
    color: #6fbf6f;
    margin-bottom: 5px;
}

.func-input-area {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    margin: 12px 0;
}

.func-input-area input {
    background: #0f1a1f;
    border: 2px solid #ffa500;
    padding: 8px 12px;
    border-radius: 25px;
    color: white;
    font-family: monospace;
    font-size: 0.9rem;
    flex: 1;
    min-width: 180px;
}

.func-input-area button {
    background: #ffa500;
    border: none;
    padding: 8px 20px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
}

.submit-answer-btn {
    background: linear-gradient(95deg, #ffa500, #ff7e05);
    border: none;
    padding: 8px 20px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 8px;
    color: white;
}

.question-item {
    background: linear-gradient(135deg, #1e2f3a, #16242e);
    padding: 15px 18px;
    border-radius: 20px;
    margin-bottom: 12px;
    border: 1px solid rgba(255, 165, 0, 0.3);
}

.question-text {
    font-weight: bold;
    margin-bottom: 12px;
    font-size: 1rem;
    color: #ffd966;
    display: flex;
    align-items: center;
    gap: 10px;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
}

.option {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(42, 62, 74, 0.8);
    padding: 10px 16px;
    border-radius: 40px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.9rem;
}

.option:hover {
    background: #3e5e6e;
    transform: translateX(5px);
}

.option input {
    cursor: pointer;
    width: 18px;
    height: 18px;
    accent-color: #ffa500;
}

.test-feedback {
    margin-top: 10px;
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 0.85rem;
}

.test-feedback.correct {
    background: linear-gradient(135deg, #2e7d5e, #236b4f);
    border-left: 4px solid #6fbf6f;
}

.test-feedback.wrong {
    background: linear-gradient(135deg, #a13e3e, #8a3232);
    border-left: 4px solid #ff8888;
}

.submit-test-btn {
    background: linear-gradient(95deg, #ffa500, #ff7e05);
    border: none;
    padding: 12px 28px;
    border-radius: 40px;
    font-weight: bold;
    cursor: pointer;
    font-size: 1rem;
    color: white;
    margin-top: 10px;
    width: 100%;
}

.test-success {
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    padding: 12px 18px;
    border-radius: 16px;
    text-align: center;
    margin-top: 15px;
    font-weight: bold;
}

.practice-feedback {
    margin-top: 10px;
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 0.85rem;
}

.practice-feedback.correct {
    background: #2e7d5e;
    border-left: 4px solid #6fbf6f;
}

.practice-feedback.wrong {
    background: #a13e3e;
    border-left: 4px solid #ff8888;
}

.success-message {
    background: #2ecc71;
    padding: 10px;
    border-radius: 12px;
    text-align: center;
    margin-top: 15px;
}

/* Модальное окно достижений */
.modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(5px);
}

.modal-content {
    background: linear-gradient(145deg, #1a2a3a 0%, #0f1a24 100%);
    margin: 5% auto;
    padding: 0;
    width: 90%;
    max-width: 800px;
    border-radius: 20px;
    border: 2px solid #ffa500;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5);
    animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
    from { opacity: 0; transform: translateY(-50px); }
    to { opacity: 1; transform: translateY(0); }
}

.modal-header {
    padding: 15px 20px;
    background: linear-gradient(135deg, #ffa500, #ff7e05);
    border-radius: 18px 18px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h2 {
    color: white;
    margin: 0;
    font-size: 1.3rem;
}

.modal-close {
    color: white;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
}

.modal-close:hover {
    color: #2c3e4e;
    transform: scale(1.2);
}

.modal-body {
    padding: 20px;
    max-height: 70vh;
    overflow-y: auto;
}

.achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
}

.achievement-card {
    background: linear-gradient(135deg, #1e2f3a, #16242e);
    border-radius: 12px;
    padding: 12px;
    text-align: center;
    position: relative;
    transition: all 0.3s;
    border: 1px solid rgba(255, 165, 0, 0.3);
}

.achievement-card.earned {
    border: 2px solid #2ecc71;
    background: linear-gradient(135deg, #1e3a2a, #162e22);
    box-shadow: 0 0 10px rgba(46, 204, 113, 0.3);
}

.achievement-card.locked {
    opacity: 0.6;
}

.achievement-icon {
    font-size: 2.2rem;
    margin-bottom: 8px;
}

.achievement-name {
    font-weight: bold;
    color: #ffd966;
    font-size: 0.9rem;
    margin-bottom: 4px;
}

.achievement-desc {
    font-size: 0.7rem;
    color: #aaa;
}

.achievement-lock, .achievement-check {
    position: absolute;
    top: 8px;
    right: 10px;
    font-size: 0.9rem;
}

.achievement-check {
    color: #2ecc71;
}

.achievement-progress {
    margin-top: 8px;
    font-size: 0.65rem;
    color: #888;
}

/* Уведомление о достижении */
.achievement-notification {
    position: fixed;
    bottom: 20px;
    right: -350px;
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    border-radius: 12px;
    padding: 12px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    z-index: 1000;
    transition: right 0.5s ease;
    max-width: 320px;
    border-left: 4px solid #ffd700;
}

.achievement-notification.show {
    right: 20px;
}

.achievement-notification-icon {
    font-size: 2rem;
}

.achievement-notification-content {
    flex: 1;
}

.achievement-notification-title {
    font-size: 0.8rem;
    opacity: 0.9;
}

.achievement-notification-name {
    font-weight: bold;
    font-size: 1rem;
    margin: 2px 0;
}

.achievement-notification-desc {
    font-size: 0.7rem;
    opacity: 0.8;
}

/* Стили для скроллбара */
::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #1e2a32;
}

::-webkit-scrollbar-thumb {
    background: #ffa500;
    border-radius: 6px;
}

/* ==================== МОБИЛЬНАЯ АДАПТАЦИЯ (ТОЛЬКО ДЛЯ ТЕЛЕФОНОВ) ==================== */
@media (max-width: 768px) {
    .mobile-menu-btn {
        display: block;
        position: fixed;
        top: 65px;
        left: 10px;
        z-index: 100;
        background: #ffa500;
        border: none;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        font-size: 1.4rem;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        transition: all 0.3s;
    }
    
    .main-layout {
        display: block;
    }
    
    .levels-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 280px;
        height: 100%;
        z-index: 200;
        transform: translateX(-100%);
        background: rgba(10, 20, 30, 0.98);
        backdrop-filter: blur(10px);
        border-right: 2px solid #ffa500;
        padding: 15px;
        transition: transform 0.3s ease;
    }
    
    .levels-sidebar.open {
        transform: translateX(0);
    }
    
    .close-sidebar-btn {
        display: block;
        background: none;
        border: none;
        color: #ffa500;
        font-size: 1.3rem;
        cursor: pointer;
    }
    
    .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    
    .levels-sidebar h3 {
        margin-bottom: 0;
    }
    
    .content-area {
        padding: 10px;
        height: calc(100vh - 70px);
    }
    
    .game-tabs-navigation {
        padding: 8px 12px;
        gap: 8px;
    }
    
    .game-tab-btn {
        padding: 10px 16px;
        min-width: 70px;
    }
    
    .game-tab-btn .tab-icon {
        font-size: 1.3rem;
    }
    
    .game-tab-btn .tab-label {
        font-size: 0.75rem;
    }
    
    .block-card {
        padding: 12px;
    }
    
    .block-card h3 {
        font-size: 1rem;
    }
    
    .theory-content {
        font-size: 0.85rem;
    }
    
    .theory-content .property-grid {
        grid-template-columns: 1fr;
    }
    
    .func-input-area {
        flex-direction: column;
        align-items: stretch;
    }
    
    .func-input-area button {
        width: 100%;
    }
    
    .submit-answer-btn {
        width: 100%;
    }
    
    .option {
        padding: 8px 12px;
        font-size: 0.8rem;
    }
    
    .modal-content {
        margin: 20% auto;
        width: 95%;
    }
    
    .achievements-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .game-header h1 {
        font-size: 0.9rem;
    }
    
    .level-info {
        gap: 8px;
        padding: 3px 10px;
    }
    
    .exp-bar-container {
        width: 70px;
    }
    
    #currentLevelDisplay {
        font-size: 0.7rem;
        max-width: 130px;
    }
    
    .game-tab-btn {
        padding: 8px 12px;
    }
    
    .game-tab-btn .tab-icon {
        font-size: 1.1rem;
    }
    
    .game-tab-btn .tab-label {
        font-size: 0.7rem;
    }
}
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <meta name="theme-color" content="#1a2a3a">
    <title>GrafMaster | RPG Квест по функциям</title>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" id="MathJax-script" async></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="game-container">
        <header class="game-header">
            <h1>📈 GrafMaster</h1>
            <div class="level-info">
                <div class="exp-info">
                    <span>✨ Опыт: </span>
                    <span id="expValue">0</span>
                    <span> / </span>
                    <span id="expNext">100</span>
                    <div class="exp-bar-container">
                        <div class="exp-bar-fill" id="expBarFill"></div>
                    </div>
                </div>
                <div class="level-info-right">
                    <span id="currentLevelDisplay">Уровень 1: Линейная функция</span>
                    <div class="stars-progress"><span id="starsCount">⭐ 0</span></div>
                </div>
            </div>
        </header>
        
        <!-- Мобильная кнопка меню (только на телефонах) -->
        <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
        
        <div class="main-layout">
            <aside class="levels-sidebar" id="levelsSidebar">
                <div class="sidebar-header">
                    <h3>🗺️ Квест-карта</h3>
                    <button class="close-sidebar-btn" id="closeSidebarBtn">✕</button>
                </div>
                <div class="levels-list" id="levelsList"></div>
                <div class="total-progress">
                    <div class="progress-bar-bg"><div class="progress-bar-fill" id="totalProgressFill"></div></div>
                    <span id="totalProgressText">0% завершено</span>
                </div>
                <div class="control-buttons">
                    <button id="resetProgressBtn" class="control-btn reset-btn">🗑️ Сбросить статистику</button>
                    <button id="unlockAllBtn" class="control-btn unlock-btn">🔓 Открыть все уровни</button>
                    <button id="showAchievementsBtn" class="control-btn achievements-btn">🏆 Достижения</button>
                </div>
            </aside>
            <main class="content-area">
                <div class="game-tabs-navigation">
                    <button class="game-tab-btn active" data-tab="theory" id="tabTheory">
                        <span class="tab-icon">📖</span>
                        <span class="tab-label">Теория</span>
                    </button>
                    <button class="game-tab-btn" data-tab="test" id="tabTest">
                        <span class="tab-icon">📝</span>
                        <span class="tab-label">Тест</span>
                    </button>
                    <button class="game-tab-btn" data-tab="practice" id="tabPractice">
                        <span class="tab-icon">🎮</span>
                        <span class="tab-label">Практика</span>
                    </button>
                </div>
                <div id="theoryTab" class="tab-content active"></div>
                <div id="testTab" class="tab-content"></div>
                <div id="practiceTab" class="tab-content"></div>
            </main>
        </div>
    </div>
    
    <!-- Модальное окно достижений -->
    <div id="achievementsModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>🏆 Достижения</h2>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body" id="achievementsPanel"></div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
