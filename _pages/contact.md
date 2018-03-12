---
title: Contact Me
permalink: /contact/
---

Feel free to contact me, if,
* You have a great job opportunity?
* You have some interesting project for freelancing support?
* You require personalized training for Test Automation?
* Our interest matches?

<script type="text/javascript">var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted)  {window.location='{{ site.url }}/thanks/';}"></iframe>
<form accept-charset="UTF-8" action="https://docs.google.com/forms/d/e/1FAIpQLSe9aM5Anq1ROuqTydGkmWRMXnf98hP93dvTpsJ8ldflc5-YHg/formResponse"
      method="POST" target="hidden_iframe" onsubmit="submitted=true;">
    <fieldset class="form-section" value="Request Form">
        <label>
            <span>Your Name?</span>
            <input type="text" name="entry.1896702928" required autofocus />
        </label>
        <label>
            <span>Your E-Mail?</span>
            <input type="email" name="emailAddress" required />
        </label>
        <label>
            <span>Your Requirement?</span>
            <select name="entry.1664610150" required>
                <option> </option>
                <option>Job opportunity</option>
                <option>Freelancing Project</option>
                <option>Test Automation Consulting</option>
                <option>Personal Training</option>
            </select>
        </label>
        <label>
            <span>Your Requirement?</span>
            <textarea name="entry.1131025310" required></textarea>
        </label>
        <input type="hidden" name="subject" value="New submission!" />
        <span class="msg-error error"></span>
        <div id="recaptcha" class="g-recaptcha" data-sitekey="{{ site.reCaptcha.siteKey }}"></div>
        <input id="btn-submit" type="submit" name="submit" value="Submit">
        <script type='text/javascript'>//<![CDATA[
        $( '#btn-submit' ).click(function(){
          var $captcha = $( '#recaptcha' ),
              response = grecaptcha.getResponse();
          
          if (response.length === 0) {
            $( '.msg-error').text( "reCAPTCHA is mandatory" );
            if( !$captcha.hasClass( "error" ) ){
              $captcha.addClass( "error" );
            }
          } else {
            $( '.msg-error' ).text('');
            $captcha.removeClass( "error" );
            alert( 'reCAPTCHA marked' );
          }
        })
});//]]>
        </script>
    </fieldset>
</form>
