        // Button Interaction
        const changeButton = document.getElementById('changeButton');
        const clickInfo = document.getElementById('clickInfo');
        let clickCount = 0;

        changeButton.addEventListener('click', () => {
            clickCount++;
            changeButton.style.backgroundColor = clickCount % 2 === 0 ? 'blue' : 'green';
            changeButton.textContent = clickCount % 2 === 0 ? 'Click me!' : 'Clicked!';
        });

        changeButton.addEventListener('dblclick', () => {
            alert('Secret double-click action activated!');
        });

        // Image Gallery
        const galleryImage = document.getElementById('galleryImage');
        const prevImage = document.getElementById('prevImage');
        const nextImage = document.getElementById('nextImage');
        const images = [
            'https://via.placeholder.com/300x200?text=Image+1',
            'https://via.placeholder.com/300x200?text=Image+2',
            'https://via.placeholder.com/300x200?text=Image+3'
        ];
        let currentImageIndex = 0;

        nextImage.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            galleryImage.src = images[currentImageIndex];
        });

        prevImage.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            galleryImage.src = images[currentImageIndex];
        });

        // Tabs
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and tab contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(tc => tc.classList.remove('active'));

                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });

        // Form Validation
        const form = document.getElementById('validationForm');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');

        function validateUsername() {
            if (!username.value.trim()) {
                usernameError.textContent = 'Username is required';
                return false;
            }
            usernameError.textContent = '';
            return true;
        }

        function validateEmail() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                emailError.textContent = 'Email is required';
                return false;
            }
            if (!emailRegex.test(email.value)) {
                emailError.textContent = 'Invalid email format';
                return false;
            }
            emailError.textContent = '';
            return true;
        }

        function validatePassword() {
            if (!password.value.trim()) {
                passwordError.textContent = 'Password is required';
                return false;
            }
            if (password.value.length < 8) {
                passwordError.textContent = 'Password must be at least 8 characters';
                return false;
            }
            passwordError.textContent = '';
            return true;
        }

        // Real-time validation
        username.addEventListener('input', validateUsername);
        email.addEventListener('input', validateEmail);
        password.addEventListener('input', validatePassword);

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const isUsernameValid = validateUsername();
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();

            if (isUsernameValid && isEmailValid && isPasswordValid) {
                alert('Form submitted successfully!');
                form.reset();
            }
        });
    