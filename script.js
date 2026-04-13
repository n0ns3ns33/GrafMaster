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
