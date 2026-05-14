// ==================== ДАННЫЕ УРОВНЕЙ (8 УРОВНЕЙ) ====================
const levelsData = [
    { // 1. Линейная функция
        name: "Линейная функция",
        expReward: { theory: 15, test: 25, practice: 40 },
        requiredExp: 0,
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
    0: [
        { formula: "2*x+1", display: "y = 2x + 1", type: "line", needPoints: 2 },
        { formula: "-x+3", display: "y = -x + 3", type: "line", needPoints: 2 },
        { formula: "0.5*x-2", display: "y = 0.5x - 2", type: "line", needPoints: 2 },
        { formula: "4", display: "y = 4", type: "line", needPoints: 2 },
        { formula: "-2*x", display: "y = -2x", type: "line", needPoints: 2 }
    ],
    1: [
        { formula: "x*x-2*x-3", display: "y = x² - 2x - 3", type: "curve", needPoints: 5 },
        { formula: "-x*x+4*x-3", display: "y = -x² + 4x - 3", type: "curve", needPoints: 5 },
        { formula: "x*x-4", display: "y = x² - 4", type: "curve", needPoints: 5 },
        { formula: "2*x*x-8*x+6", display: "y = 2x² - 8x + 6", type: "curve", needPoints: 5 },
        { formula: "-x*x+2*x", display: "y = -x² + 2x", type: "curve", needPoints: 5 }
    ],
    2: [
        { formula: "3/x", display: "y = 3/x", type: "hyperbola", needPoints: 6 },
        { formula: "-2/x", display: "y = -2/x", type: "hyperbola", needPoints: 6 },
        { formula: "1/x", display: "y = 1/x", type: "hyperbola", needPoints: 6 },
        { formula: "4/x", display: "y = 4/x", type: "hyperbola", needPoints: 6 },
        { formula: "-3/x", display: "y = -3/x", type: "hyperbola", needPoints: 6 }
    ],
    3: [
        { formula: "x", display: "y = x", type: "line", needPoints: 2 },
        { formula: "x+2", display: "y = x + 2", type: "line", needPoints: 2 },
        { formula: "x-3", display: "y = x - 3", type: "line", needPoints: 2 },
        { formula: "2*x", display: "y = 2x", type: "line", needPoints: 2 },
        { formula: "0.5*x", display: "y = 0.5x", type: "line", needPoints: 2 }
    ],
    4: [
        { formula: "x*x", display: "y = x²", type: "curve", needPoints: 5 },
        { formula: "x*x+2", display: "y = x² + 2", type: "curve", needPoints: 5 },
        { formula: "x*x-4", display: "y = x² - 4", type: "curve", needPoints: 5 },
        { formula: "2*x*x", display: "y = 2x²", type: "curve", needPoints: 5 },
        { formula: "0.5*x*x", display: "y = 0.5x²", type: "curve", needPoints: 5 }
    ],
    5: [
        { formula: "x*x*x", display: "y = x³", type: "curve", needPoints: 7 },
        { formula: "2*x*x*x", display: "y = 2x³", type: "curve", needPoints: 7 },
        { formula: "-x*x*x", display: "y = -x³", type: "curve", needPoints: 7 },
        { formula: "x*x*x-2*x", display: "y = x³ - 2x", type: "curve", needPoints: 7 },
        { formula: "x*x*x+x", display: "y = x³ + x", type: "curve", needPoints: 7 }
    ],
    6: [
        { formula: "Math.sqrt(x)", display: "y = √x", type: "curve", needPoints: 6 },
        { formula: "Math.sqrt(x)+2", display: "y = √x + 2", type: "curve", needPoints: 6 },
        { formula: "2*Math.sqrt(x)", display: "y = 2√x", type: "curve", needPoints: 6 },
        { formula: "Math.sqrt(x-2)", display: "y = √(x-2)", type: "curve", needPoints: 6 },
        { formula: "Math.sqrt(x+1)", display: "y = √(x+1)", type: "curve", needPoints: 6 }
    ],
    7: [
        { formula: "Math.abs(x)", display: "y = |x|", type: "line", needPoints: 5 },
        { formula: "Math.abs(x)+1", display: "y = |x| + 1", type: "line", needPoints: 5 },
        { formula: "Math.abs(x-2)", display: "y = |x-2|", type: "line", needPoints: 5 },
        { formula: "2*Math.abs(x)", display: "y = 2|x|", type: "line", needPoints: 5 },
        { formula: "Math.abs(x+1)-2", display: "y = |x+1| - 2", type: "line", needPoints: 5 }
    ]
};

// ==================== ДОСТИЖЕНИЯ ====================
const achievements = [
    { id: "first_theory", name: "📖 Первые шаги", description: "Изучить первую тему", icon: "📖", req: { type: "theory" } },
    { id: "first_test", name: "🎯 Знаток", description: "Правильно ответить на все вопросы первого теста", icon: "🎯", req: { type: "test" } },
    { id: "first_practice", name: "🎮 Мастер графиков", description: "Выполнить первую практику", icon: "🎮", req: { type: "practice" } },
    { id: "practice_10", name: "📐 Практикант", description: "Выполнить 10 заданий практики", icon: "📐", req: { type: "practice_count", count: 10 } },
    { id: "practice_20", name: "⚡ Мастер", description: "Выполнить 20 заданий практики", icon: "⚡", req: { type: "practice_count", count: 20 } },
    { id: "practice_all", name: "👑 Чемпион", description: "Выполнить ВСЕ задания практики", icon: "👑", req: { type: "practice_count", count: 40 } },
    { id: "all_unlocked", name: "🔓 Исследователь", description: "Открыть все уровни", icon: "🔓", req: { type: "all_unlocked" } }
];

let earnedAchievements = JSON.parse(localStorage.getItem("graphGameAchievements")) || [];

function checkAchievements() {
    let totalPractice = 0;
    for (let i = 0; i < levelsData.length; i++) {
        const comp = userProgress.completedTests[i] || {};
        if (comp.practiceTasks) totalPractice += Object.values(comp.practiceTasks).filter(v => v).length;
    }
    for (const ach of achievements) {
        if (earnedAchievements.includes(ach.id)) continue;
        let earned = false;
        if (ach.req.type === "theory") earned = userProgress.completedTests[0]?.theoryViewed;
        else if (ach.req.type === "test") earned = userProgress.completedTests[0]?.test;
        else if (ach.req.type === "practice") earned = userProgress.completedTests[0]?.practice;
        else if (ach.req.type === "practice_count") earned = totalPractice >= ach.req.count;
        else if (ach.req.type === "all_unlocked") earned = userProgress.unlockedLevels === levelsData.length;
        if (earned) { earnedAchievements.push(ach.id); showAchievement(ach); }
    }
    localStorage.setItem("graphGameAchievements", JSON.stringify(earnedAchievements));
    renderAchievements();
}

function showAchievement(ach) {
    const notif = document.createElement("div");
    notif.className = "achievement-notification";
    notif.innerHTML = `<div class="achievement-notification-icon">${ach.icon}</div><div class="achievement-notification-content"><div>🏆 Достижение!</div><div><strong>${ach.name}</strong></div><div>${ach.description}</div></div>`;
    document.body.appendChild(notif);
    setTimeout(() => notif.classList.add("show"), 100);
    setTimeout(() => { notif.classList.remove("show"); setTimeout(() => notif.remove(), 500); }, 4000);
}

function renderAchievements() {
    const panel = document.getElementById("achievementsPanel");
    if (!panel) return;
    let totalPractice = 0;
    for (let i = 0; i < levelsData.length; i++) {
        const comp = userProgress.completedTests[i] || {};
        if (comp.practiceTasks) totalPractice += Object.values(comp.practiceTasks).filter(v => v).length;
    }
    panel.innerHTML = `<div class="achievements-grid">` + achievements.map(ach => {
        const earned = earnedAchievements.includes(ach.id);
        return `<div class="achievement-card ${earned ? 'earned' : 'locked'}">
            <div class="achievement-icon">${ach.icon}</div>
            <div class="achievement-name">${ach.name}</div>
            <div class="achievement-desc">${ach.description}</div>
            ${ach.req.type === "practice_count" && !earned ? `<div class="achievement-progress">${totalPractice}/${ach.req.count}</div>` : ''}
            ${earned ? '<div class="achievement-check">✅</div>' : '<div class="achievement-lock">🔒</div>'}
        </div>`;
    }).join('') + `</div>`;
}

// ==================== СОСТОЯНИЕ ИГРЫ ====================
let userProgress = JSON.parse(localStorage.getItem("graphGameProgress")) || { stars: {}, completedTests: {}, exp: 0, unlockedLevels: 1 };

function initProgress() {
    for (let i = 0; i < levelsData.length; i++) {
        if (userProgress.stars[i] === undefined) userProgress.stars[i] = 0;
        if (!userProgress.completedTests[i]) userProgress.completedTests[i] = { test: false, practice: false, theoryViewed: false, practiceTasks: {} };
        for (let t = 0; t < (practiceTasks[i]?.length || 0); t++) {
            if (userProgress.completedTests[i].practiceTasks[t] === undefined) userProgress.completedTests[i].practiceTasks[t] = false;
        }
    }
    if (userProgress.unlockedLevels === undefined) userProgress.unlockedLevels = 1;
    if (userProgress.exp === undefined) userProgress.exp = 0;
}
initProgress();

let currentLevel = 0;
let currentTab = 'theory';

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

function updateExpUI() {
    expValueSpan.textContent = userProgress.exp;
    const needed = 100 + 50 * (Math.max(1, userProgress.unlockedLevels) - 1);
    expNextSpan.textContent = needed;
    expBarFill.style.width = `${Math.min(100, (userProgress.exp / needed) * 100)}%`;
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
        if (userProgress.exp >= levelsData[i].requiredExp) newUnlocked = i + 1;
        else break;
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
    document.getElementById("tabTheory")?.classList.toggle("completed-theory", comp.theoryViewed);
    document.getElementById("tabTest")?.classList.toggle("completed-test", comp.test);
    document.getElementById("tabPractice")?.classList.toggle("completed-practice", comp.practice);
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
        const isUnlocked = idx < userProgress.unlockedLevels;
        const comp = userProgress.completedTests[idx] || {};
        const isComplete = comp.theoryViewed && comp.test && comp.practice;
        const btn = document.createElement("button");
        btn.className = `level-btn ${currentLevel === idx ? "active" : ""} ${!isUnlocked ? "locked" : ""}`;
        btn.innerHTML = `<div class="level-number ${isComplete ? "completed" : ""}">${idx + 1}</div><div class="level-name">${levelsData[idx].name}</div>${!isUnlocked ? '<span class="lock-icon">🔒</span>' : ''}`;
        if (isUnlocked) btn.addEventListener("click", () => { currentLevel = idx; renderSidebar(); renderAllTabs(); updateHeaderInfo(); updateBlockProgress(); document.querySelector(`.game-tab-btn[data-tab="${currentTab}"]`)?.click(); });
        levelsListDiv.appendChild(btn);
    }
    updateTotalProgress();
}

// ==================== ГРАФИКИ ====================
const axesPlugin = {
    id: 'axesLines',
    afterDraw(chart) {
        const { ctx, chartArea, scales } = chart;
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = '#ff6666';
        ctx.lineWidth = 2;
        const xZero = scales.x.getPixelForValue(0);
        if (xZero >= chartArea.left && xZero <= chartArea.right) { ctx.moveTo(xZero, chartArea.top); ctx.lineTo(xZero, chartArea.bottom); ctx.stroke(); }
        const yZero = scales.y.getPixelForValue(0);
        if (yZero >= chartArea.top && yZero <= chartArea.bottom) { ctx.moveTo(chartArea.left, yZero); ctx.lineTo(chartArea.right, yZero); ctx.stroke(); }
        ctx.restore();
    }
};
Chart.register(axesPlugin);

function evaluateFunction(funcStr, x) { return new Function('x', 'return ' + funcStr)(x); }

function drawGraph(canvas, funcStr, color = '#ffa500', label = 'График') {
    if (!canvas) return;
    if (canvas.chart) { try { canvas.chart.destroy(); } catch(e) {} }
    const points = [];
    for (let x = -9; x <= 9; x += 0.15) {
        try {
            let y = evaluateFunction(funcStr, x);
            if (typeof y === 'number' && isFinite(y) && Math.abs(y) < 100) points.push({ x, y });
        } catch(e) {}
    }
    if (points.length < 2) return;
    canvas.chart = new Chart(canvas, {
        type: 'scatter',
        data: { datasets: [{ label: label, data: points, borderColor: color, backgroundColor: 'transparent', borderWidth: 2.5, pointRadius: 0, showLine: true, tension: 0.3 }] },
        options: { responsive: true, maintainAspectRatio: true, animation: false, plugins: { legend: { labels: { color: '#ffd966' } }, tooltip: { callbacks: { label: (ctx) => `(${ctx.parsed.x.toFixed(2)}, ${ctx.parsed.y.toFixed(2)})` } } }, scales: { x: { min: -9, max: 9, grid: { color: (ctx) => Math.abs(ctx.tick.value) < 0.001 ? '#ff6666' : '#3a4a55' }, ticks: { color: '#ccc', stepSize: 1 } }, y: { min: -9, max: 9, grid: { color: (ctx) => Math.abs(ctx.tick.value) < 0.001 ? '#ff6666' : '#3a4a55' }, ticks: { color: '#ccc', stepSize: 1 } } } }
    });
}

// ==================== ПЛАВНОЕ РИСОВАНИЕ КРИВЫХ (CATMULL-ROM СПЛАЙН) ====================
function getCatmullRomPoints(points) {
    if (points.length < 2) return points;
    const result = [];
    const sorted = [...points].sort((a, b) => a.x - b.x);
    
    function interpolate(p0, p1, p2, p3, t) {
        const t2 = t * t;
        const t3 = t2 * t;
        const x = 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3);
        const y = 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * t + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3);
        return { x, y };
    }
    
    result.push(sorted[0]);
    for (let i = 0; i < sorted.length - 1; i++) {
        const p0 = sorted[Math.max(0, i - 1)];
        const p1 = sorted[i];
        const p2 = sorted[i + 1];
        const p3 = sorted[Math.min(sorted.length - 1, i + 2)];
        const steps = 30;
        for (let s = 1; s <= steps; s++) {
            const t = s / steps;
            result.push(interpolate(p0, p1, p2, p3, t));
        }
    }
    return result;
}

// ==================== ТЕОРИЯ ====================
function markTheoryViewed() {
    const comp = userProgress.completedTests[currentLevel];
    if (!comp.theoryViewed) {
        comp.theoryViewed = true;
        addExp(levelsData[currentLevel].expReward.theory);
        localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
        recalcStars(currentLevel);
        updateBlockProgress();
        renderTheory();
    }
}

function renderTheory() {
    const level = levelsData[currentLevel];
    const comp = userProgress.completedTests[currentLevel] || {};
    const completedCount = (comp.theoryViewed ? 1 : 0) + (comp.test ? 1 : 0) + (comp.practice ? 1 : 0);
    const percent = Math.floor(completedCount / 3 * 100);
    theoryTabDiv.innerHTML = `<div class="block-card"><h3>📖 ${level.name}<div class="block-progress"><span>${completedCount}/3 заданий</span><div class="block-progress-bar"><div class="block-progress-fill" style="width: ${percent}%"></div></div></div></h3><div class="theory-content">${level.theory}</div><button id="markTheoryBtn" style="background:#2ecc71;margin-top:10px;border:none;padding:8px 20px;border-radius:25px;font-weight:bold;cursor:pointer;color:white;" ${comp.theoryViewed ? "disabled style='opacity:0.6'" : ""}>${comp.theoryViewed ? "✅ Теория изучена! (+" + level.expReward.theory + " опыта)" : "✅ Отметить теорию (+" + level.expReward.theory + " опыта)"}</button></div>`;
    setTimeout(() => {
        theoryTabDiv.querySelectorAll('.example-box').forEach(box => {
            const funcStr = box.getAttribute('data-example-func');
            const canvas = box.querySelector('.example-canvas');
            if (funcStr && canvas) drawGraph(canvas, funcStr, '#ffa500', 'График');
        });
    }, 100);
    document.getElementById("markTheoryBtn")?.addEventListener("click", () => { markTheoryViewed(); renderTheory(); });
    if (window.MathJax) MathJax.typesetPromise();
}

// ==================== ТЕСТ ====================
function shuffleArray(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

function renderTest() {
    const level = levelsData[currentLevel];
    const comp = userProgress.completedTests[currentLevel] || {};
    const completedCount = (comp.theoryViewed ? 1 : 0) + (comp.test ? 1 : 0) + (comp.practice ? 1 : 0);
    const percent = Math.floor(completedCount / 3 * 100);
    
    const shuffled = level.testQuestions.map((q, idx) => {
        const opts = shuffleArray([...q.options]);
        const newCorrect = opts.indexOf(q.options[q.correct]);
        return { text: q.text, options: opts, correct: newCorrect, explanation: q.explanation, idx: idx };
    });
    
    let html = `<div class="block-card"><h3>📝 Проверь знания!<div class="block-progress"><span>${completedCount}/3 заданий</span><div class="block-progress-bar"><div class="block-progress-fill" style="width: ${percent}%"></div></div></div></h3><div class="test-container">`;
    shuffled.forEach((q, i) => {
        html += `<div class="question-item"><div class="question-text">${i+1}. ${q.text}</div><div class="options">${q.options.map((o, oi) => `<label class="option"><input type="radio" name="q${currentLevel}_${i}" value="${oi}"><span>${String.fromCharCode(65+oi)}. ${o}</span></label>`).join('')}</div><div class="test-feedback" id="fb_${i}"></div></div>`;
    });
    html += `<button id="submitTestBtn" class="submit-test-btn">✅ Проверить! (+${level.expReward.test} опыта)</button>${comp.test ? '<div class="test-success">🎉 Тест пройден! ⭐</div>' : ''}</div></div>`;
    testTabDiv.innerHTML = html;
    
    document.getElementById("submitTestBtn")?.addEventListener("click", () => {
        let allCorrect = true;
        shuffled.forEach((q, i) => {
            const selected = document.querySelector(`input[name="q${currentLevel}_${i}"]:checked`);
            const fb = document.getElementById(`fb_${i}`);
            if (selected && parseInt(selected.value) === q.correct) {
                fb.innerHTML = `✅ Верно! ${q.explanation}`;
                fb.className = "test-feedback correct";
            } else {
                fb.innerHTML = `❌ Неправильно. ${q.explanation}<br>📖 Правильный ответ: ${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}`;
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
        }
    });
}

// ==================== ПРАКТИКА (С ПЛАВНЫМИ КРИВЫМИ И РАЗДЕЛЬНЫМИ ВЕТВЯМИ ДЛЯ ГИПЕРБОЛЫ) ====================
function initPracticeCanvas(canvas, task, onPointsUpdate) {
    if (!canvas) return null;
    
    // Адаптивный размер canvas под экран
    let size = Math.min(window.innerWidth - 40, 600);
    if (window.innerWidth > 768) size = 600;
    if (window.innerWidth > 1024) size = 700;
    
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    let points = [];
    const xMin = -9, xMax = 9, yMin = -9, yMax = 9;
    const w = canvas.width, h = canvas.height;
    
    function toCanvas(x, y) { 
        return { x: ((x - xMin) / (xMax - xMin)) * w, y: h - ((y - yMin) / (yMax - yMin)) * h }; 
    }
    function toMath(px, py) { 
        return { x: Math.round((xMin + (px / w) * (xMax - xMin)) * 2) / 2, y: Math.round((yMin + ((h - py) / h) * (yMax - yMin)) * 2) / 2 }; 
    }
    
    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = '#0a1217';
        ctx.fillRect(0, 0, w, h);
        
        // Тонкая сетка (каждая единица)
        ctx.beginPath();
        ctx.strokeStyle = '#2a3a45';
        ctx.lineWidth = 0.8;
        for (let x = -9; x <= 9; x += 1) {
            const { x: px } = toCanvas(x, 0);
            ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke();
        }
        for (let y = -9; y <= 9; y += 1) {
            const { y: py } = toCanvas(0, y);
            ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke();
        }
        
        // Жирные линии через каждые 2 единицы
        ctx.beginPath();
        ctx.strokeStyle = '#5a8a9a';
        ctx.lineWidth = 1.5;
        for (let x = -8; x <= 8; x += 2) {
            const { x: px } = toCanvas(x, 0);
            ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, h); ctx.stroke();
        }
        for (let y = -8; y <= 8; y += 2) {
            const { y: py } = toCanvas(0, y);
            ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(w, py); ctx.stroke();
        }
        
        // Оси координат
        ctx.beginPath();
        ctx.strokeStyle = '#ff6666';
        ctx.lineWidth = 3;
        const { y: yZero } = toCanvas(0, 0);
        ctx.moveTo(0, yZero); ctx.lineTo(w, yZero); ctx.stroke();
        const { x: xZero } = toCanvas(0, 0);
        ctx.moveTo(xZero, 0); ctx.lineTo(xZero, h); ctx.stroke();
        
        // Стрелки
        ctx.fillStyle = '#ff6666';
        const arrowX = toCanvas(8.7, 0);
        ctx.beginPath(); ctx.moveTo(arrowX.x - 12, arrowX.y - 6); ctx.lineTo(arrowX.x, arrowX.y); ctx.lineTo(arrowX.x - 12, arrowX.y + 6); ctx.fill();
        const arrowY = toCanvas(0, 8.7);
        ctx.beginPath(); ctx.moveTo(arrowY.x - 6, arrowY.y + 12); ctx.lineTo(arrowY.x, arrowY.y); ctx.lineTo(arrowY.x + 6, arrowY.y + 12); ctx.fill();
        
        // Подписи осей
        ctx.fillStyle = '#ffd966';
        let fontSize = Math.max(14, Math.min(24, w / 25));
        ctx.font = `bold ${fontSize}px "Segoe UI", monospace`;
        ctx.fillText('x', w - fontSize - 5, yZero - fontSize/2);
        ctx.fillText('y', xZero + fontSize/2 + 3, fontSize + 5);
        
        // Подписи делений
        ctx.fillStyle = '#ffd966';
        let labelFontSize = Math.max(12, Math.min(20, w / 30));
        ctx.font = `bold ${labelFontSize}px "Segoe UI", monospace`;
        ctx.textAlign = 'center';
        for (let x = -8; x <= 8; x += 2) {
            if (x !== 0) {
                const { x: px, y: py } = toCanvas(x, 0);
                ctx.fillText(x, px, py + labelFontSize + 4);
            }
        }
        ctx.textAlign = 'right';
        for (let y = -8; y <= 8; y += 2) {
            if (y !== 0) {
                const { x: px, y: py } = toCanvas(0, y);
                ctx.fillText(y, px - 6, py + labelFontSize/2);
            }
        }
        
        // Нуль
        ctx.fillStyle = '#ff8888';
        ctx.font = `bold ${fontSize}px "Segoe UI", monospace`;
        ctx.textAlign = 'center';
        const { x: x0, y: y0 } = toCanvas(0, 0);
        ctx.fillText('0', x0, y0 + labelFontSize + 5);
        
        // Рисуем плавные линии через точки
        if (points.length >= 2) {
            const sorted = [...points].sort((a, b) => a.x - b.x);
            
            if (task.type === 'hyperbola') {
                const leftPoints = sorted.filter(p => p.x < 0);
                const rightPoints = sorted.filter(p => p.x > 0);
                
                if (leftPoints.length >= 2) {
                    const smoothLeft = getCatmullRomPoints(leftPoints);
                    ctx.beginPath();
                    ctx.strokeStyle = '#ffa500';
                    ctx.lineWidth = 4;
                    ctx.lineJoin = 'round';
                    ctx.lineCap = 'round';
                    const first = toCanvas(smoothLeft[0].x, smoothLeft[0].y);
                    ctx.moveTo(first.x, first.y);
                    for (let i = 1; i < smoothLeft.length; i++) {
                        const p = toCanvas(smoothLeft[i].x, smoothLeft[i].y);
                        ctx.lineTo(p.x, p.y);
                    }
                    ctx.stroke();
                }
                
                if (rightPoints.length >= 2) {
                    const smoothRight = getCatmullRomPoints(rightPoints);
                    ctx.beginPath();
                    ctx.strokeStyle = '#ffa500';
                    ctx.lineWidth = 4;
                    ctx.lineJoin = 'round';
                    ctx.lineCap = 'round';
                    const first = toCanvas(smoothRight[0].x, smoothRight[0].y);
                    ctx.moveTo(first.x, first.y);
                    for (let i = 1; i < smoothRight.length; i++) {
                        const p = toCanvas(smoothRight[i].x, smoothRight[i].y);
                        ctx.lineTo(p.x, p.y);
                    }
                    ctx.stroke();
                }
            } 
            else if (task.type === 'curve') {
                const smoothPoints = getCatmullRomPoints(sorted);
                ctx.beginPath();
                ctx.strokeStyle = '#ffa500';
                ctx.lineWidth = 4;
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';
                const first = toCanvas(smoothPoints[0].x, smoothPoints[0].y);
                ctx.moveTo(first.x, first.y);
                for (let i = 1; i < smoothPoints.length; i++) {
                    const p = toCanvas(smoothPoints[i].x, smoothPoints[i].y);
                    ctx.lineTo(p.x, p.y);
                }
                ctx.stroke();
            }
            else {
                ctx.beginPath();
                ctx.strokeStyle = '#ffa500';
                ctx.lineWidth = 4;
                ctx.lineJoin = 'round';
                ctx.lineCap = 'round';
                const first = toCanvas(sorted[0].x, sorted[0].y);
                ctx.moveTo(first.x, first.y);
                for (let i = 1; i < sorted.length; i++) {
                    const p = toCanvas(sorted[i].x, sorted[i].y);
                    ctx.lineTo(p.x, p.y);
                }
                ctx.stroke();
            }
        }
        
        // Рисуем точки
        let pointRadius = Math.max(8, Math.min(14, w / 45));
        points.forEach(p => {
            const { x: px, y: py } = toCanvas(p.x, p.y);
            ctx.beginPath(); ctx.fillStyle = '#ffa500'; ctx.arc(px, py, pointRadius, 0, 2 * Math.PI); ctx.fill();
            ctx.beginPath(); ctx.fillStyle = '#ffffff'; ctx.arc(px, py, pointRadius/2, 0, 2 * Math.PI); ctx.fill();
            ctx.fillStyle = '#ffd966'; 
            ctx.font = `bold ${pointRadius}px monospace`; 
            ctx.textAlign = 'left';
            ctx.fillText(`(${p.x};${p.y})`, px + pointRadius + 4, py - pointRadius/2);
        });
    }
    
    function addPoint(x, y) {
        const px = Math.round(x * 2) / 2;
        const py = Math.round(y * 2) / 2;
        if (px < -9 || px > 9 || py < -9 || py > 9) return;
        if (task.type === 'hyperbola' && px === 0) return;
        if (!points.some(p => p.x === px && p.y === py)) {
            points.push({ x: px, y: py });
            draw();
            if (onPointsUpdate) onPointsUpdate(points);
        }
    }
    
    function removeLast() { if (points.length) { points.pop(); draw(); if (onPointsUpdate) onPointsUpdate(points); } }
    function clearAll() { points = []; draw(); if (onPointsUpdate) onPointsUpdate(points); }
    function getPoints() { return [...points]; }
    
    canvas.onclick = (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        let clientX, clientY;
        if (e.touches) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
            e.preventDefault();
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        const canvasX = (clientX - rect.left) * scaleX;
        const canvasY = (clientY - rect.top) * scaleY;
        if (canvasX >= 0 && canvasX <= w && canvasY >= 0 && canvasY <= h) {
            const { x, y } = toMath(canvasX, canvasY);
            addPoint(x, y);
        }
    };
    
    canvas.ontouchstart = canvas.onclick;
    
    draw();
    return { removeLast, clearAll, getPoints, addPoint };
}

function checkPractice(points, formula, needPoints, type) {
    if (!points || points.length < needPoints) return { ok: false, msg: `❌ Нужно ${needPoints} точек (сейчас ${points?.length || 0})` };
    
    if (type === 'hyperbola') {
        const zeroPoint = points.find(p => p.x === 0);
        if (zeroPoint) return { ok: false, msg: `❌ Точка (0;${zeroPoint.y}) не может лежать на гиперболе, так как x ≠ 0!` };
    }
    
    let wrong = [];
    for (const p of points) {
        try {
            let target = evaluateFunction(formula, p.x);
            if (Math.abs(target - p.y) > 0.3) wrong.push(p);
        } catch(e) { wrong.push(p); }
    }
    if (wrong.length) return { ok: false, msg: `❌ Точки ${wrong.map(w => `(${w.x};${w.y})`).join(', ')} не на графике!` };
    
    let hint = "";
    if (type === "line") hint = " Прямая линия, для неё достаточно 2 точек.";
    else if (type === "hyperbola") hint = " Гипербола состоит из двух отдельных плавных ветвей! Точки с x<0 и x>0 не соединяются между собой.";
    else hint = " Плавная кривая! Чем больше точек, тем точнее график.";
    
    return { ok: true, msg: `✅ Все точки лежат на графике!${hint}` };
}

function renderPractice() {
    const level = levelsData[currentLevel];
    const comp = userProgress.completedTests[currentLevel] || {};
    const tasks = practiceTasks[currentLevel] || [];
    const completedCount = (comp.theoryViewed ? 1 : 0) + (comp.test ? 1 : 0) + (comp.practice ? 1 : 0);
    const percent = Math.floor(completedCount / 3 * 100);
    
    let html = `<div class="block-card"><h3>🎮 Практика: построй график!<div class="block-progress"><span>${completedCount}/3 заданий</span><div class="block-progress-bar"><div class="block-progress-fill" style="width: ${percent}%"></div></div></div></h3>`;
    html += `<p>📌 <strong>Задание:</strong> Построй график функции, <strong class="highlight">кликая по координатной сетке</strong> для добавления точек. Точки автоматически соединятся плавной линией.</p>
             <p>💡 <strong>Совет:</strong> Единичный отрезок = 1. Для гиперболы точки с x<0 и x>0 образуют две отдельные плавные ветви.</p>`;
    html += `<div class="practice-tasks-container">`;
    
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const isDone = comp.practiceTasks?.[i] || false;
        html += `
            <div class="practice-task-item" data-task="${i}">
                <div class="practice-task-header">
                    <span class="practice-task-title">📐 Задание ${i+1}</span>
                    <span class="practice-task-status ${isDone ? 'completed' : ''}">${isDone ? '✅ Выполнено' : '⏳ Не выполнено'}</span>
                </div>
                <div class="practice-formula-display">
                    <div class="formula-badge">🎯 Построй: <strong class="formula-highlight">${task.display}</strong></div>
                </div>
                <div class="practice-graph-container">
                    <canvas id="practiceCanvas_${i}" style="background:#0a1217; border-radius:10px; cursor:crosshair; border:3px solid #ffa500; max-width:100%; height:auto;"></canvas>
                </div>
                <div class="point-controls">
                    <button class="undo-btn" data-task="${i}">↩️ Отменить точку</button>
                    <button class="clear-btn" data-task="${i}">🗑️ Очистить всё</button>
                </div>
                <div id="practiceFeedback_${i}" class="practice-feedback"></div>
                ${!isDone ? `
                <div style="display:flex; gap:15px; margin-top:20px;">
                    <button class="check-btn" data-task="${i}">🔍 Проверить график</button>
                    <button class="submit-btn" data-task="${i}" disabled>🏆 Сдать задание</button>
                </div>
                ` : ''}
            </div>
        `;
    }
    html += `</div>`;
    if (comp.practice) html += `<div class="success-message">✔ Все задания выполнены! Молодец! 🌟</div>`;
    html += `</div>`;
    practiceTabDiv.innerHTML = html;
    
    setTimeout(() => {
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const isDone = comp.practiceTasks?.[i] || false;
            const canvas = document.getElementById(`practiceCanvas_${i}`);
            if (!canvas) continue;
            
            if (isDone) {
                drawGraph(canvas, task.formula, '#6fbf6f', 'Правильный график');
                continue;
            }
            
            let currentPoints = [];
            let verified = false;
            
            const manager = initPracticeCanvas(canvas, task, (pts) => {
                currentPoints = pts;
                verified = false;
                const submitBtn = document.querySelector(`.submit-btn[data-task="${i}"]`);
                if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.5'; submitBtn.textContent = '🏆 Сначала проверь!'; }
                const fb = document.getElementById(`practiceFeedback_${i}`);
                if (fb) { fb.innerHTML = ''; fb.className = 'practice-feedback'; }
            });
            
            document.querySelector(`.undo-btn[data-task="${i}"]`)?.addEventListener('click', () => {
                manager.removeLast();
                verified = false;
                const submitBtn = document.querySelector(`.submit-btn[data-task="${i}"]`);
                if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.5'; submitBtn.textContent = '🏆 Сначала проверь!'; }
                document.getElementById(`practiceFeedback_${i}`).innerHTML = '';
            });
            
            document.querySelector(`.clear-btn[data-task="${i}"]`)?.addEventListener('click', () => {
                manager.clearAll();
                verified = false;
                const submitBtn = document.querySelector(`.submit-btn[data-task="${i}"]`);
                if (submitBtn) { submitBtn.disabled = true; submitBtn.style.opacity = '0.5'; submitBtn.textContent = '🏆 Сначала проверь!'; }
                document.getElementById(`practiceFeedback_${i}`).innerHTML = '';
            });
            
            document.querySelector(`.check-btn[data-task="${i}"]`)?.addEventListener('click', () => {
                const points = manager.getPoints();
                const res = checkPractice(points, task.formula, task.needPoints, task.type);
                const fb = document.getElementById(`practiceFeedback_${i}`);
                fb.innerHTML = res.msg;
                fb.className = res.ok ? 'practice-feedback correct' : 'practice-feedback wrong';
                if (res.ok) {
                    verified = true;
                    const submitBtn = document.querySelector(`.submit-btn[data-task="${i}"]`);
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.style.opacity = '1'; submitBtn.textContent = '🏆 Сдать задание (+' + level.expReward.practice + ' опыта)'; }
                }
            });
            
            document.querySelector(`.submit-btn[data-task="${i}"]`)?.addEventListener('click', () => {
                if (!verified) {
                    document.getElementById(`practiceFeedback_${i}`).innerHTML = '❌ Сначала проверь график кнопкой "Проверить график"!';
                    document.getElementById(`practiceFeedback_${i}`).className = 'practice-feedback wrong';
                    return;
                }
                const compData = userProgress.completedTests[currentLevel];
                if (!compData.practiceTasks[i]) {
                    compData.practiceTasks[i] = true;
                    let allDone = true;
                    for (let j = 0; j < tasks.length; j++) if (!compData.practiceTasks[j]) allDone = false;
                    if (allDone && !compData.practice) {
                        compData.practice = true;
                        addExp(level.expReward.practice);
                    }
                    localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
                    recalcStars(currentLevel);
                    renderPractice();
                    updateBlockProgress();
                    checkAchievements();
                }
            });
        }
    }, 100);
}

// ==================== ОСТАЛЬНЫЕ ФУНКЦИИ ====================
function renderAllTabs() { renderTheory(); renderTest(); renderPractice(); }

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

function resetAllProgress() {
    if (confirm("⚠️ Удалить весь прогресс?")) {
        userProgress = { stars: {}, completedTests: {}, exp: 0, unlockedLevels: 1 };
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
        alert("✅ Прогресс сброшен!");
    }
}

function unlockAllLevels() {
    if (confirm("🔓 Открыть все уровни?")) {
        userProgress.unlockedLevels = levelsData.length;
        localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
        renderSidebar();
        checkLevelUnlocks();
        alert("✅ Все уровни открыты!");
    }
}

// ==================== ОТЗЫВЫ ====================
let reviews = JSON.parse(localStorage.getItem("grafMasterReviews")) || [];

function renderReviews() {
    const panel = document.getElementById("reviewsPanel");
    if (!panel) return;
    let avg = reviews.length ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) : 0;
    panel.innerHTML = `
        <div class="review-form">
            <h4>📝 Оставить отзыв</h4>
            <div class="rating-input">${[5,4,3,2,1].map(v => `<input type="radio" name="rating" id="star${v}" value="${v}"><label for="star${v}">★</label>`).join('')}</div>
            <input type="text" id="reviewAuthor" placeholder="Ваше имя" class="review-text-input">
            <textarea id="reviewText" rows="3" placeholder="Ваш отзыв..." class="review-text-input"></textarea>
            <button id="submitReview" class="submit-review-btn">📤 Отправить</button>
        </div>
        ${reviews.length ? `<div class="average-rating"><div class="rating-value">${avg}</div><div class="rating-stars">${'★'.repeat(Math.floor(avg))}${'☆'.repeat(5-Math.floor(avg))}</div><div class="rating-count">${reviews.length} отзывов</div></div>` : ''}
        <div class="reviews-list">${reviews.length ? reviews.map(r => `<div class="review-item"><div class="review-header"><span class="review-author">${escapeHtml(r.author)}</span><div class="review-rating">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</div><span class="review-date">${r.date}</span></div><div class="review-text">${escapeHtml(r.text)}</div><button class="delete-review" data-id="${r.id}">🗑️ Удалить</button></div>`).join('') : '<div class="no-reviews">✨ Пока нет отзывов</div>'}</div>
    `;
    document.getElementById("submitReview")?.addEventListener("click", () => {
        const rating = document.querySelector('input[name="rating"]:checked')?.value || 5;
        const author = document.getElementById("reviewAuthor")?.value || "Аноним";
        const text = document.getElementById("reviewText")?.value;
        if (text) {
            reviews.unshift({ id: Date.now(), author, rating: parseInt(rating), text, date: new Date().toLocaleString() });
            localStorage.setItem("grafMasterReviews", JSON.stringify(reviews));
            renderReviews();
            document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
            document.getElementById("reviewText").value = "";
            alert("Спасибо за отзыв! 🌟");
        } else alert("Напишите отзыв!");
    });
    document.querySelectorAll(".delete-review").forEach(btn => btn.addEventListener("click", () => { reviews = reviews.filter(r => r.id !== parseInt(btn.dataset.id)); localStorage.setItem("grafMasterReviews", JSON.stringify(reviews)); renderReviews(); }));
}
function escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }

// ==================== ЭКСПОРТ/ИМПОРТ ====================
function exportSave() {
    const data = { version: "1.0", progress: userProgress, achievements: earnedAchievements };
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data)], { type: "application/json" }));
    a.download = `grafmaster_save_${new Date().toISOString().slice(0,19)}.json`;
    a.click();
    alert("💾 Сохранение экспортировано!");
}
function importSave(file) {
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.progress) {
                userProgress = data.progress;
                earnedAchievements = data.achievements || [];
                localStorage.setItem("graphGameProgress", JSON.stringify(userProgress));
                localStorage.setItem("graphGameAchievements", JSON.stringify(earnedAchievements));
                initProgress();
                location.reload();
            } else alert("❌ Неверный формат!");
        } catch(err) { alert("Ошибка: " + err.message); }
    };
    reader.readAsText(file);
}

// ==================== МОДАЛЬНЫЕ ОКНА ====================
document.getElementById("showAchievementsBtn")?.addEventListener("click", () => { renderAchievements(); document.getElementById("achievementsModal").style.display = "block"; });
document.querySelector(".modal-close")?.addEventListener("click", () => document.getElementById("achievementsModal").style.display = "none");
document.getElementById("showReviewsBtn")?.addEventListener("click", () => { renderReviews(); document.getElementById("reviewsModal").style.display = "block"; });
document.querySelector(".modal-close-reviews")?.addEventListener("click", () => document.getElementById("reviewsModal").style.display = "none");
document.getElementById("resetProgressBtn")?.addEventListener("click", resetAllProgress);
document.getElementById("unlockAllBtn")?.addEventListener("click", unlockAllLevels);
document.getElementById("exportSaveBtn")?.addEventListener("click", exportSave);
document.getElementById("importSaveInput")?.addEventListener("change", e => { if (e.target.files[0]) importSave(e.target.files[0]); e.target.value = ""; });
window.onclick = e => { if (e.target === document.getElementById("achievementsModal")) document.getElementById("achievementsModal").style.display = "none"; if (e.target === document.getElementById("reviewsModal")) document.getElementById("reviewsModal").style.display = "none"; };

// ==================== МОБИЛЬНОЕ МЕНЮ ====================
document.getElementById("mobileMenuBtn")?.addEventListener("click", () => document.getElementById("levelsSidebar")?.classList.add("open"));
document.getElementById("closeSidebarBtn")?.addEventListener("click", () => document.getElementById("levelsSidebar")?.classList.remove("open"));
document.addEventListener("click", e => { if (window.innerWidth <= 768 && document.getElementById("levelsSidebar")?.classList.contains("open") && !document.getElementById("levelsSidebar")?.contains(e.target) && !document.getElementById("mobileMenuBtn")?.contains(e.target)) document.getElementById("levelsSidebar")?.classList.remove("open"); });

// ==================== ЗАПУСК ====================
function init() {
    updateExpUI();
    renderSidebar();
    renderAllTabs();
    setupTabs();
    updateHeaderInfo();
    updateBlockProgress();
    checkLevelUnlocks();
    updateTabIconsStatus(currentLevel);
    renderAchievements();
}
init();
