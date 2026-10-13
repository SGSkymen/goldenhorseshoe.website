(function() {
    'use strict';
    
    let protectionTriggered = false;
    let checkCount = 0;
    const maxChecks = 3;

    function clearAppContent() {
        if (protectionTriggered) return;
        protectionTriggered = true;
        
        const appElement = document.getElementById('app');
        if (appElement) {
            appElement.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #fff; background: #222222; min-height: 300px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <h3 style="color: #fcd93c; margin-bottom: 20px; font-size: 24px;">Контент защищен</h3>
                    <p style="font-size: 16px; line-height: 1.5;">Просмотр исходного кода отключен для защиты интеллектуальной собственности.</p>
                    <p style="font-size: 14px; color: #cccccc; margin-top: 20px;">Золотая Подкова © 2024</p>
                </div>
            `;
        }
    }

    function setupDevToolsDetection() {
        const threshold = 200;
        
        setInterval(function() {
            if (protectionTriggered || checkCount >= maxChecks) return;
            
            checkCount++;
            
            const widthDiff = window.outerWidth - window.innerWidth;
            const heightDiff = window.outerHeight - window.innerHeight;
            
            const devToolsLikelyOpen = (widthDiff > threshold && heightDiff > threshold) ||
                                     (widthDiff > 300) || (heightDiff > 300);
            
            if (devToolsLikelyOpen && checkCount >= 2) {
                clearAppContent();
            }
        }, 1000);
    }

    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.keyCode === 85) {
            e.preventDefault();
            clearAppContent();
            return false;
        }
        
        if (e.keyCode === 123) {
            e.preventDefault();
            clearAppContent();
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
            e.preventDefault();
            clearAppContent();
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
            e.preventDefault();
            clearAppContent();
            return false;
        }
        
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
            e.preventDefault();
            clearAppContent();
            return false;
        }
        
        if (e.ctrlKey && e.keyCode === 83) {
            e.preventDefault();
            return false;
        }
    });

    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    document.addEventListener('drop', function(e) {
        e.preventDefault();
        return false;
    });

    window.addEventListener('load', function() {
        setTimeout(function() {
            setupDevToolsDetection();
        }, 2000);
        
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
            return false;
        });
    });

    window.console = (function(originalConsole) {
        return {
            log: function() {
                clearAppContent();
                originalConsole.log.apply(originalConsole, arguments);
            },
            info: function() {
                clearAppContent();
                originalConsole.info.apply(originalConsole, arguments);
            },
            warn: function() {
                clearAppContent();
                originalConsole.warn.apply(originalConsole, arguments);
            },
            error: function() {
                clearAppContent();
                originalConsole.error.apply(originalConsole, arguments);
            },
            debug: function() {
                clearAppContent();
                originalConsole.debug.apply(originalConsole, arguments);
            }
        };
    }(window.console));

    Object.defineProperty(document, 'visibilityState', {
        get: function() {
            return 'visible';
        },
        configurable: false
    });

    Object.defineProperty(document, 'hidden', {
        get: function() {
            return false;
        },
        configurable: false
    });

    if (window.self !== window.top) {
        document.body.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #fff; background: #222222; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <h3 style="color: #fcd93c; margin-bottom: 20px; font-size: 24px;">Доступ запрещен</h3>
                <p style="font-size: 16px; line-height: 1.5;">Отображение сайта в iframe заблокировано.</p>
            </div>
        `;
    }

})();
