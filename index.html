<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>دائرة عقارات الدولة - التحويل الصوتي المتكامل</title>
    <style>
        :root {
            --primary-color: #1a472a;
            --secondary-color: #2c5f2d;
            --accent-color: #3f72af;
            --background: #f8fafc;
            --text-dark: #2d3748;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Tajawal', Arial, sans-serif;
            background: var(--background);
            line-height: 1.6;
            color: var(--text-dark);
        }

        .container {
            max-width: 100%;
            padding: 0 15px;
            margin: 0 auto;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            background: linear-gradient(135deg, var(--primary-color), #14321a);
            color: white;
            padding: 1.5rem 1rem;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-radius: 0 0 25px 25px;
            margin-bottom: 2rem;
        }

        .header h1 {
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
            font-weight: 700;
        }

        .header h2 {
            font-size: 1.1rem;
            font-weight: 400;
            opacity: 0.9;
        }

        .main-content {
            flex: 1;
        }

        .recorder-box {
            background: white;
            padding: 2rem 1.5rem;
            border-radius: 20px;
            box-shadow: 0 4px 25px rgba(0,0,0,0.07);
            margin-bottom: 2rem;
        }

        button {
            background: var(--secondary-color);
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 30px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            width: 100%;
            max-width: 320px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            margin: 1rem auto;
            position: relative;
            overflow: hidden;
        }

        button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                120deg,
                transparent,
                rgba(255,255,255,0.3),
                transparent
            );
            transition: 0.5s;
        }

        button:hover::before {
            left: 100%;
        }

        #copyBtn {
            background: var(--primary-color);
            max-width: 240px;
        }

        #bluetoothBtn {
            background: var(--accent-color);
            max-width: 280px;
        }

        #result {
            background: #ffffff;
            min-height: 180px;
            margin: 1.5rem 0;
            padding: 1.5rem;
            border-radius: 15px;
            border: 2px solid #e2e8f0;
            font-size: 1.1rem;
            line-height: 1.8;
            white-space: pre-wrap;
            transition: all 0.3s ease;
        }

        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid var(--secondary-color);
            border-radius: 50%;
            width: 35px;
            height: 35px;
            animation: spin 1s linear infinite;
            margin: 1.5rem auto;
            display: none;
        }

        .action-buttons {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            margin-top: 2rem;
        }

        .icon {
            font-size: 1.2rem;
        }

        .bluetooth-status {
            width: 12px;
            height: 12px;
            background: #e53e3e;
            border-radius: 50%;
            display: inline-block;
            margin-left: 8px;
            box-shadow: 0 0 8px rgba(229,62,62,0.3);
        }

        .bluetooth-connected {
            background: #48bb78;
            box-shadow: 0 0 8px rgba(72,187,120,0.3);
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 1.5rem;
            }

            .header h2 {
                font-size: 1rem;
            }

            #result {
                min-height: 150px;
                padding: 1.2rem;
                font-size: 1rem;
            }

            button {
                padding: 0.9rem 1.5rem;
                font-size: 0.95rem;
                max-width: 100%;
            }
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .toast {
            position: fixed;
            bottom: 25px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.9);
            color: white;
            padding: 12px 25px;
            border-radius: 30px;
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            font-size: 0.95rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .toast.error {
            background: #c53030;
        }

        .toast.success {
            background: #2c5f2d;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>دائرة عقارات الدولة</h1>
            <h2>النظام الذكي للتحويل الصوتي</h2>
        </header>

        <main class="main-content">
            <div class="recorder-box">
                <button id="startBtn">
                    <i class="fas fa-microphone icon"></i>
                    <span>بدء التسجيل</span>
                </button>
                <div class="loader" id="loader"></div>
                <div id="result"></div>
                <div class="action-buttons">
                    <button id="copyBtn">
                        <i class="far fa-copy icon"></i>
                        نسخ النص
                    </button>
                    <button id="bluetoothBtn">
                        <i class="fab fa-bluetooth-b icon"></i>
                        مشاركة عبر بلوتوث
                        <span class="bluetooth-status"></span>
                    </button>
                </div>
            </div>

            <div class="instructions">
                <h3>إرشادات الاستخدام:</h3>
                <p><i class="fas fa-info-circle"></i> تأكد من اتصال الميكروفون</p>
                <p><i class="fas fa-volume-up"></i> التحدث بوضوح في مكان هادئ</p>
                <p><i class="fas fa-mobile-alt"></i> تحديث متصفح الجوال إلى آخر إصدار</p>
            </div>
        </main>

        <footer>
            <p>© 2024 نظام التحويل الصوتي - جميع الحقوق محفوظة</p>
        </footer>
    </div>

    <script>
        const startBtn = document.getElementById('startBtn');
        const copyBtn = document.getElementById('copyBtn');
        const bluetoothBtn = document.getElementById('bluetoothBtn');
        const resultDiv = document.getElementById('result');
        const loader = document.getElementById('loader');
        const bluetoothStatus = document.querySelector('.bluetooth-status');

        let recognition;
        let isRecording = false;
        let bluetoothDevice = null;

        // طلب إذن الميكروفون
        async function requestMicrophonePermission() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                return true;
            } catch (err) {
                showToast('يجب السماح باستخدام الميكروفون', 'error');
                return false;
            }
        }

        // إدارة التسجيل الصوتي
        function setupSpeechRecognition() {
            if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                recognition.lang = 'ar-SA';
                recognition.continuous = true;
                recognition.interimResults = true;

                recognition.onresult = (event) => {
                    const transcript = Array.from(event.results)
                        .map(result => result[0].transcript)
                        .join('');
                    resultDiv.textContent = transcript;
                };

                recognition.onerror = (event) => {
                    showToast('حدث خطأ في التعرف على الصوت', 'error');
                };

                recognition.onend = () => {
                    loader.style.display = 'none';
                    startBtn.innerHTML = `<i class="fas fa-microphone icon"></i><span>بدء التسجيل</span>`;
                    isRecording = false;
                };
            } else {
                showToast('المتصفح غير مدعوم', 'error');
                startBtn.disabled = true;
            }
        }

        // إدارة البلوتوث
        async function manageBluetoothConnection() {
            if (!navigator.bluetooth) {
                showToast('المتصفح لا يدعم البلوتوث', 'error');
                bluetoothBtn.disabled = true;
                return;
            }

            try {
                bluetoothDevice = await navigator.bluetooth.requestDevice({
                    acceptAllDevices: true,
                    optionalServices: ['generic_access']
                });

                bluetoothStatus.classList.add('bluetooth-connected');
                const server = await bluetoothDevice.gatt.connect();
                showToast('تم الاتصال بـ ' + bluetoothDevice.name);

                // إرسال النص عند الاتصال
                if (resultDiv.textContent.trim()) {
                    const data = new TextEncoder().encode(resultDiv.textContent);
                    const service = await server.getPrimaryService('generic_access');
                    const characteristic = await service.getCharacteristic('device_name');
                    await characteristic.writeValue(data);
                    showToast('تم الإرسال بنجاح');
                }

            } catch (error) {
                console.error('Bluetooth Error:', error);
                showToast('فشل في الاتصال', 'error');
            } finally {
                bluetoothStatus.classList.remove('bluetooth-connected');
            }
        }

        // إدارة الأحداث
        startBtn.addEventListener('click', async () => {
            if (!isRecording) {
                const permissionGranted = await requestMicrophonePermission();
                if (!permissionGranted) return;
                
                loader.style.display = 'block';
                recognition.start();
                startBtn.innerHTML = `<i class="fas fa-stop-circle icon"></i><span>إيقاف التسجيل</span>`;
                isRecording = true;
            } else {
                recognition.stop();
                loader.style.display = 'none';
            }
        });

        copyBtn.addEventListener('click', async () => {
            const text = resultDiv.textContent.trim();
            if (text) {
                try {
                    await navigator.clipboard.writeText(text);
                    showToast('تم النسخ إلى الحافظة');
                } catch (err) {
                    showToast('فشل في النسخ', 'error');
                }
            } else {
                showToast('لا يوجد نص للنسخ', 'error');
            }
        });

        bluetoothBtn.addEventListener('click', manageBluetoothConnection);

        // الرسائل التنبيهية
        function showToast(message, type = 'success') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.innerHTML = `
                <i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i>
                ${message}
            `;
            
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        }

        // التهيئة الأولية
        setupSpeechRecognition();
    </script>
</body>
</html>
