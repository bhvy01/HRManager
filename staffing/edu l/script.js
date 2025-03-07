document.addEventListener("DOMContentLoaded", () => {
    // Add Scroll Animations
    const containers = document.querySelectorAll('.container');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    containers.forEach(container => observer.observe(container));

    // Loan Calculator Function
    window.calculateLoan = function() {
        let amount = document.getElementById('amount').value;
        let rate = document.getElementById('rate').value;
        let years = document.getElementById('years').value;
        let monthlyRate = rate / 100 / 12;
        let numPayments = years * 12;
        let emi = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
        document.getElementById('emi').innerText = emi ? `$${emi.toFixed(2)}` : "Invalid Input";
    }

    const canvas = document.getElementById("bgCanvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const rupees = [];
    const rupeeCount = 50; // Adjust the number of floating ₹ symbols
    
    class Rupee {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 20 + 5;
            this.speedX = (Math.random() - 0.5) * 1.5;
            this.speedY = (Math.random() - 0.5) * 1.5;
            this.opacity = Math.random() * 0.3 + 0.2;
            this.pulseSpeed = Math.random() * 0.05 + 0.02;
            this.pulsePhase = Math.random() * Math.PI * 2;
        }
    
        draw() {
            ctx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`;
            ctx.font = `${this.size}px Orbitron`;
            ctx.fillText("₹", this.x, this.y);
        }
    
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    
            // Pulsing effect
            this.size += Math.sin(Date.now() * this.pulseSpeed + this.pulsePhase) * 0.5;
        }
    }
    
    for (let i = 0; i < rupeeCount; i++) {
        rupees.push(new Rupee());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        rupees.forEach((rupee) => {
            rupee.update();
            rupee.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
