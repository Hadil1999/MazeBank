{% extends 'base.html.twig' %}

{% block title %}Register{% endblock %}

{% block register %}
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name="keywords" content="Genius,Ocean,Sea,Etc,Genius,Ocean,SeaGenius,Ocean,Sea,Etc,Genius,Ocean,SeaGenius,Ocean,Sea,Etc,Genius,Ocean,Sea">
        <meta name="author" content="GeniusOcean">
        <title>Genius Bank - All in Digital One Banking System</title>

    <link rel="stylesheet" href="../assets/front/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../assets/front/css/animate.css" />
    <link rel="stylesheet" href="../assets/front/css/all.min.css" />
    <link rel="stylesheet" href="../assets/front/css/lightbox.min.css" />
    <link rel="stylesheet" href="../assets/front/css/odometer.css" />
    <link rel="stylesheet" href="../assets/front/css/owl.min.css" />
    <link rel="stylesheet" href="../assets/front/css/main.css" />
    <link rel="stylesheet" href="../assets/front/css/toastr.min.css">

    <link rel="stylesheet" href="../assets/front/css/styles93e6.css?color=0ba026">

            <link href="https://fonts.googleapis.com/css?family=Manrope&amp;display=swap" rel="stylesheet">
    
            <link rel="stylesheet" id="colorr" href="../assets/front/css/font9411.css?font_familly=Manrope">
    
        
    <link rel="shortcut icon" href="../assets/images/16393007481563335660service-icon-1.png">
</head>

<body>
    <!-- Overlayer -->
    <span class="toTopBtn">
        <i class="fas fa-angle-up"></i>
    </span>
    <div class="overlayer"></div>
    <div class="loader">
        <h2>
            <span class="let1">l</span>
            <span class="let2">o</span>
            <span class="let3">a</span>
            <span class="let4">d</span>
            <span class="let5">i</span>
            <span class="let6">n</span>
            <span class="let7">g</span>
        </h2>
    </div>

<!-- Header -->
  
        </div>
        <div class="navbar-bottom">
            <div class="container">
                <div class="navbar-wrapper">
    <div class="logo">
        <a href="../index.html">
            <img src="../assets/images/Stww4kQy1645001015.png" alt="logo" />
        </a>
    </div>
    <div class="change-language d-sm-none ms-auto me-3 text--title">
        <select name="language" class="language selectors nice language-bar">
                            <option value="https://product.geniusocean.com/genius-bank/language/1" selected >
                    EN
                </option>
                    </select>
    </div>
    <div class="nav-toggle d-lg-none">
        <span></span>
        <span></span>
        <span></span>
    </div>
    <div class="nav-menu-area">
        <div class="menu-close text--danger d-lg-none">
            <i class="fas fa-times"></i>
        </div>
        <ul class="nav-menu">
                            <li><a href="../index.html" target="_self">Home</a></li>
                            <li><a href="../services.html" target="_self">Services</a></li>
                            <li><a href="../blogs.html" target="_self">Blog</a></li>
                            <li><a href="../about.html" target="_self">About</a></li>
            
                            <li>
                    <a href="../contact.html">Contact</a>
                </li>
                        
            <li>
                <div class="btn__grp ms-lg-3">
                                            <a href="{{path('app_login')}}" class="cmn--btn">Login Now</a>
                                    </div>
            </li>
        </ul>
    </div>
</div>            </div>
        </div>
    </header>
    <!-- Header -->

     <!-- Hero -->
    <section class="hero-section bg--overlay bg_img" data-img="../assets/images/4oHWW9wP1647317756.html">
        <div class="container">
            <div class="hero-content">
                <h2 class="hero-title"></h2>
                <ul class="breadcrumb">
                    <li>
                        <a href="../index.html">Home</a>
                    </li>
                    <li>
                        Registration                    </li>
                </ul>
            </div>
        </div>
    </section>
    <!-- Hero -->

    {% for flash_error in app.flashes('verify_email_error') %}
        <div class="alert alert-danger" role="alert">{{ flash_error }}</div>
    {% endfor %}

    <section class="account-section pt-100 pb-100">
        <div class="container">
            <div class="account-wrapper bg--body">
                <div class="section-title mb-3">
                    <h6 class="subtitle text--base">Sign Up</h6>
                    <h3 class="title">Create Account Now</h3>
                </div>
                <form id="registrationForm" class="account-form row gy-3 gx-4 align-items-center" 
                 method="POST" novalidate>
                <div class="alert alert-success alert-dismissible fade show" style="display: none;">
  <p class="m-0 text-success"></p>
            </div>

    {# {{ form_start(registrationForm) }}
        {{ form_row(registrationForm.name,{'attr':{'class':'form-label col-sm-6'}}) }}
        {{ form_row(registrationForm.email,{'attr':{'class':'form-label col-sm-6'}}) }}

        {{ form_row(registrationForm.phone,{'attr':{'class':'form-label col-sm-6'}}) }}
        
        {{ form_row(registrationForm.plainPassword,{
    label: 'Password',
    attr: {'class': 'form-label col-sm-6'} }) }}

        {{ form_row(registrationForm.AgencyName) }}

                    <div class="mt-2">
                        <div class="form-check mt-3 mb-0">
                            <input type="checkbox" id="accept" class="form-check-input" checked>
                            <label class="form-check-label" for="accept">I accept all the <a href="#0"
                                    class="text--base">privacy & policy</a></label>
                        </div>
                    </div>

        <button type="submit" class="cmn--btn bg--base me-3">
                            Register Now                        </button>
    {{ form_end(registrationForm) }} #}
    {# {{ form_start(registrationForm) }}

    <div class="row">
        <div class="col-sm-6">
            {{ form_row(registrationForm.name, {'attr': {'class': 'form-label'}}) }}
        </div>
        <div class="col-sm-6">
            {{ form_row(registrationForm.email, {'attr': {'class': 'form-label'}}) }}
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            {{ form_row(registrationForm.phone, {'attr': {'class': 'form-label'}}) }}
        </div>
        <div class="col-sm-6">
            {{ form_row(registrationForm.plainPassword, {'label': 'Password', 'attr': {'class': 'form-label'}}) }}
        </div>
    </div>

    <div class="row">
        <div class="col">
            {{ form_row(registrationForm.AgencyName) }}
        </div>
    </div>
                    <div class="mt-2">
                        <div class="form-check mt-3 mb-0">
                            <input type="checkbox" id="accept" class="form-check-input" checked>
                            <label class="form-check-label" for="accept">I accept all the <a href="#0"
                                    class="text--base">privacy & policy</a></label>
                        </div>
                    </div>

        <button type="submit" class="cmn--btn bg--base me-3">
                            Register Now                        </button>
{{ form_end(registrationForm) }} #}

{{ form_start(registrationForm) }}
   
    <div class="row">
        <div class="col-sm-6">
            {{ form_row(registrationForm.name, {'attr': {'class': 'form-control'}}) }}
        </div>
        <div class="col-sm-6">
            {{ form_row(registrationForm.email, {'attr': {'class': 'form-control'}}) }}
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
        
            {{ form_row(registrationForm.phone, {'attr': {'class': 'form-control'}}) }}
        </div>
          <div class="col-sm-6">
    <label for="{{ registrationForm.AgencyName.vars.id }}">Agency Name</label>
    {{ form_widget(registrationForm.AgencyName, {'attr': {'class': 'form-control'}}) }}
    {{ form_errors(registrationForm.AgencyName)}}
            </div>
    {# </div> #}
        {# <div class="col-sm-6">
            {{ form_row(registrationForm.AgencyName, {'attr': {'class': 'form-label'}}) }}
        </div> #}
        {# <div class="row">
  
</div> #}
        {# <div class="col-sm-6">
            {{ form_row(registrationForm.plainPassword, {'label': 'Password', 'attr': {'class': 'form-label'}}) }}
        </div> #}
    </div>
{# <div class="row">
    <div class="col-sm-6">
        {{ form_row(registrationForm.plainPassword, {'label': 'Password', 'attr': {'class': 'form-label'}}) }}
    </div>
    <div class="col-sm-6">
        {{ form_row(registrationForm.confirmPassword, {'label': 'Confirm Password', 'attr': {'class': 'form-label'}}) }}
    </div>
</div> #}
    {# <div class="row">
        <div class="col">
            {{ form_row(registrationForm.AgencyName) }}
        </div>
    </div> #}
    <div class="row">
    <div class="col-sm-6">
        {{ form_row(registrationForm.password.first, {'attr': {'class': 'form-control'}} ) }}
    </div>
    <div class="col-sm-6">
        {{ form_row(registrationForm.password.second,  {'attr': {'class': 'form-control'}})  }}
    </div>
</div>
    
        <div class="mt-2">
                        <div class="form-check mt-3 mb-0">
                            <input type="checkbox" id="accept" class="form-check-input" checked>
                            <label class="form-check-label" for="accept">Accept <a href="#0"
                                    class="text--base">privacy & policy</a></label>
                        </div>
        </div>
        <button type="submit" class="cmn--btn bg--base me-3 w-100">Register Now</button>
{{ form_end(registrationForm) }}

    </div>
    </section>

<!-- Footer -->
    <footer class="bg--section">
    <div class="footer-top position-relative">
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-logo">
                    <a href="index.html">
                        <img src="../assets/images/Qk6wE0dR1645001520.png" alt="logo">
                    </a>
                </div>
                <div class="footer-links">
                    <h5 class="title">About</h5>
                    <ul>
                                                    <li>
                                <a href="../privacy.html">Privacy &amp; Policy</a>
                            </li>
                        
                    </ul>
                </div>
                <div class="footer-links mobile-second-item">
                    <h5 class="title">Contact</h5>
                    <ul>
                        <li>
                            <a href="#0">3584 Hickory Heights Drive ,Hanover MD 21076, USA</a>
                        </li>
                        <li>
                            <a href="admin%40geniusocean.html">admin@geniusocean.com</a>
                        </li>
                        <li>
                            <a href="%2b12%203456%207890%201234.html">+12 3456 7890 1234</a>
                        </li>
                    </ul>
                </div>
                
                <div class="footer-comunity">
                    <h5 class="title">Community</h5>
                    <ul class="social-icons justify-content-start mt-0 mb-4">
                                                    <li>
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            </li>
                        
                                                    <li>
                                <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                            </li>
                        
                                                    <li>
                                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                                            </ul>
                    <p>
                        Stay Excited, Subscribe to our Newsletter                    </p>
      
                        
                    <form class="input-group mt-3 footer-input-group" action="https://product.geniusocean.com/genius-bank/subscriber" method="POST">
                        <input type="hidden" name="_token" value="CxwJfHukZdKzLel0kUjduqwUBxRZZnQuluge7UIX">                        <input type="email" name="email" class="form-control" placeholder="Your email address...">
                        <button class="input-group-text bg--white border-0 text--base">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom position-relative pb-5">
        <div class="container text-center">
            <p>
                COPYRIGHT © 2019. All Rights Reserved By <a href="http://geniusocean.com/">GeniusOcean.com</a>            </p>
        </div>
    </div>
</footer>    <!-- Footer -->

    <div class="cookie-bar-wrap show js-cookie-consent cookie-consent">
    <div class="container d-flex justify-content-center">
        <div class="col-xl-10 col-lg-12">
            <div class="row justify-content-center">
                <div class="cookie-bar">
                    <div class="cookie-bar-text cookie-consent__message">
                        Your experience on this site will be improved by allowing cookies.
                    </div> 
                    <div class="cookie-bar-action js-cookie-consent-agree cookie-consent__agree">
                        <button class="btn btn-primary btn-accept">
                            Allow cookies
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    <script>

        window.laravelCookieConsent = (function () {

            const COOKIE_VALUE = 1;
            const COOKIE_DOMAIN = 'product.geniusocean.com';

            function consentWithCookies() {
                setCookie('laravel_cookie_consent', COOKIE_VALUE, 7300);
                hideCookieDialog();
            }

            function cookieExists(name) {
                return (document.cookie.split('; ').indexOf(name + '=' + COOKIE_VALUE) !== -1);
            }

            function hideCookieDialog() {
                const dialogs = document.getElementsByClassName('js-cookie-consent');

                for (let i = 0; i < dialogs.length; ++i) {
                    dialogs[i].style.display = 'none';
                }
            }

            function setCookie(name, value, expirationInDays) {
                const date = new Date();
                date.setTime(date.getTime() + (expirationInDays * 24 * 60 * 60 * 1000));
                document.cookie = name + '=' + value
                    + ';expires=' + date.toUTCString()
                    + ';domain=' + COOKIE_DOMAIN
                    + ';path=/'
                    + '';
            }

            if (cookieExists('laravel_cookie_consent')) {
                hideCookieDialog();
            }

            const buttons = document.getElementsByClassName('js-cookie-consent-agree');

            for (let i = 0; i < buttons.length; ++i) {
                buttons[i].addEventListener('click', consentWithCookies);
            }

            return {
                consentWithCookies: consentWithCookies,
                hideCookieDialog: hideCookieDialog
            };
        })();
    </script>


    <!-- Modal -->
    <div class="modal fade" id="modal-apply">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg--section">
                    <h5 class="modal-title loan-title m-0">Basic</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="https://product.geniusocean.com/genius-bank/user/loan-amount" method="post">
                    <input type="hidden" name="_token" value="CxwJfHukZdKzLel0kUjduqwUBxRZZnQuluge7UIX">                    <div class="modal-body">
                        <div class="pt-3 pb-4">
                            <label for="amount" class="form-label">Amount</label>
                            <div class="input-group input--group">
                                <input type="number" name="amount" class="form-group-input form-control form--control"
                                    placeholder="0.00" id="amount">
                                <button type="button" class="input-group-text">NGN</button>
                            </div>
                            <input type="hidden" name="planId" id="planId" value="">
                        </div>
                    </div>
                    <div class="modal-footer bg--section">
                        <button type="button" class="btn shadow-none btn--danger" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn shadow-none btn--success">Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Modal -->

    <!-- Modal -->
    <div class="modal fade" id="modal-pension">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg--section">
                    <h5 class="modal-title loan-title m-0">Basic</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form action="https://product.geniusocean.com/genius-bank/user/fdr-amount" method="post">
                    <input type="hidden" name="_token" value="CxwJfHukZdKzLel0kUjduqwUBxRZZnQuluge7UIX">                    <div class="modal-body">
                        <div class="pt-3 pb-4">
                            <label for="amount" class="form-label">Amount</label>
                            <div class="input-group input--group">
                                <input type="number" name="amount" class="form-group-input form-control form--control"
                                    placeholder="0.00" id="amount">
                                <button type="button" class="input-group-text">NGN</button>
                            </div>
                            <input type="hidden" name="planId" id="fdrplan" value="">
                        </div>
                    </div>
                    <div class="modal-footer bg--section">
                        <button type="button" class="btn shadow-none btn--danger" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn shadow-none btn--success">Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Modal -->


    <script src="../assets/front/js/jquery-3.6.0.min.js"></script>
    <script src="../assets/front/js/bootstrap.min.js"></script>
    <script src="../assets/front/js/viewport.jquery.js"></script>
    <script src="../assets/front/js/odometer.min.js"></script>
    <script src="../assets/front/js/lightbox.min.js"></script>
    <script src="../assets/front/js/owl.min.js"></script>
    <script src="../assets/front/js/toastr.min.js"></script>
    <script src="../assets/front/js/notify.js"></script>
    <script src="../assets/front/js/main.js"></script>
    <script src="../assets/front/js/custom.js"></script>

    <script>
        'use strict';
		let mainurl = 'https://product.geniusocean.com/genius-bank';
	</script>

    <script>
        'use strict';
    
              
              
              
            </script>

    <script>
        'use strict';

        $('.apply-loan').on('click',function(){
            let id = $(this).data('id');
            let title = $(this).data('title');

            $('#planId').val(id);
            $('.loan-title').text(title);
        });

        $('.apply-pension').on('click',function(){
            let id = $(this).data('id');
            let title = $(this).data('title');

            $('#fdrplan').val(id);
            $('.loan-title').text(title);
        });
    </script>
        
</body>
{% endblock %}
                     