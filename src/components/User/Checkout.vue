<template>
	<div class="l-section l-section--container l-section--top-margin">
		<div class="l-section__content">
			<div class="woocommerce">
				<form name="checkout" method="post" class="c-cart c-cart--checkout checkout woocommerce-checkout" action="https://parkofideas.com/foodz/demo1/checkout/" enctype="multipart/form-data" novalidate="novalidate">
					<div class="c-cart__wrap">
						<div class="c-cart__col-1 c-cart__col-1--checkout">
							<div class="js-sticky-sidebar-nearby">
								<div class="col2-set" id="customer_details">
									<div class="col-1">
										<div class="c-cart__form woocommerce-billing-fields">
											<h3 class="c-cart__header">Billing details</h3>

											<div class="woocommerce-billing-fields__field-wrapper">
												<p class="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10">
													<label for="billing_first_name" class="">First name&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper"><input type="text" class="input-text" name="billing_first_name" id="billing_first_name" placeholder="" autocomplete="given-name" /></span>
												</p>
												<p class="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20">
													<label for="billing_last_name" class="">Last name&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper"><input type="text" class="input-text" name="billing_last_name" id="billing_last_name" placeholder="" autocomplete="family-name" /></span>
												</p>
												<p class="form-row form-row-wide" id="billing_company_field" data-priority="30">
													<label for="billing_company" class="">Company name&nbsp;<span class="optional">(optional)</span></label>
													<span class="woocommerce-input-wrapper"><input type="text" class="input-text" name="billing_company" id="billing_company" placeholder="" autocomplete="organization" /></span>
												</p>
												<p class="form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field" data-priority="40">
													<label for="billing_country" class="">Country / Region&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper">
														<select name="billing_country" id="billing_country" class="country_to_state country_select select2-hidden-accessible" autocomplete="country" tabindex="-1" aria-hidden="true">
															<option value="default">Select a country / region…</option>
															<option value="AF">Afghanistan</option>
															<option value="AX">Åland Islands</option>
															<option value="AL">Albania</option>
															<option value="DZ">Algeria</option>
															<option value="AS">American Samoa</option>
															<option value="AD">Andorra</option>
															<option value="AO">Angola</option>
															<option value="AI">Anguilla</option>
															<option value="AQ">Antarctica</option>
															<option value="AG">Antigua and Barbuda</option>
															<option value="AR">Argentina</option>
															<option value="AM">Armenia</option>
															<option value="AW">Aruba</option>
															<option value="AU">Australia</option>
															<option value="AT">Austria</option>
															<option value="AZ">Azerbaijan</option>
															<option value="BS">Bahamas</option>
															<option value="BH">Bahrain</option>
															<option value="BD">Bangladesh</option>
															<option value="BB">Barbados</option>
															<option value="BY">Belarus</option>
															<option value="PW">Belau</option>
															<option value="BE">Belgium</option>
															<option value="BZ">Belize</option>
															<option value="BJ">Benin</option>
															<option value="BM">Bermuda</option>
															<option value="BT">Bhutan</option>
															<option value="BO">Bolivia</option>
															<option value="BQ">Bonaire, Saint Eustatius and Saba</option>
															<option value="BA">Bosnia and Herzegovina</option>
															<option value="BW">Botswana</option>
															<option value="BV">Bouvet Island</option>
															<option value="BR">Brazil</option>
															<option value="IO">British Indian Ocean Territory</option>
															<option value="BN">Brunei</option>
															<option value="BG">Bulgaria</option>
															<option value="BF">Burkina Faso</option>
															<option value="BI">Burundi</option>
															<option value="KH">Cambodia</option>
															<option value="CM">Cameroon</option>
															<option value="CA">Canada</option>
															<option value="CV">Cape Verde</option>
															<option value="KY">Cayman Islands</option>
															<option value="CF">Central African Republic</option>
															<option value="TD">Chad</option>
															<option value="CL">Chile</option>
															<option value="CN">China</option>
															<option value="CX">Christmas Island</option>
															<option value="CC">Cocos (Keeling) Islands</option>
															<option value="CO">Colombia</option>
															<option value="KM">Comoros</option>
															<option value="CG">Congo (Brazzaville)</option>
															<option value="CD">Congo (Kinshasa)</option>
															<option value="CK">Cook Islands</option>
															<option value="CR">Costa Rica</option>
															<option value="HR">Croatia</option>
															<option value="CU">Cuba</option>
															<option value="CW">Curaçao</option>
															<option value="CY">Cyprus</option>
															<option value="CZ">Czech Republic</option>
															<option value="DK">Denmark</option>
															<option value="DJ">Djibouti</option>
															<option value="DM">Dominica</option>
															<option value="DO">Dominican Republic</option>
															<option value="EC">Ecuador</option>
															<option value="EG">Egypt</option>
															<option value="SV">El Salvador</option>
															<option value="GQ">Equatorial Guinea</option>
															<option value="ER">Eritrea</option>
															<option value="EE">Estonia</option>
															<option value="ET">Ethiopia</option>
															<option value="FK">Falkland Islands</option>
															<option value="FO">Faroe Islands</option>
															<option value="FJ">Fiji</option>
															<option value="FI">Finland</option>
															<option value="FR">France</option>
															<option value="GF">French Guiana</option>
															<option value="PF">French Polynesia</option>
															<option value="TF">French Southern Territories</option>
															<option value="GA">Gabon</option>
															<option value="GM">Gambia</option>
															<option value="GE">Georgia</option>
															<option value="DE">Germany</option>
															<option value="GH">Ghana</option>
															<option value="GI">Gibraltar</option>
															<option value="GR">Greece</option>
															<option value="GL">Greenland</option>
															<option value="GD">Grenada</option>
															<option value="GP">Guadeloupe</option>
															<option value="GU">Guam</option>
															<option value="GT">Guatemala</option>
															<option value="GG">Guernsey</option>
															<option value="GN">Guinea</option>
															<option value="GW">Guinea-Bissau</option>
															<option value="GY">Guyana</option>
															<option value="HT">Haiti</option>
															<option value="HM">Heard Island and McDonald Islands</option>
															<option value="HN">Honduras</option>
															<option value="HK">Hong Kong</option>
															<option value="HU">Hungary</option>
															<option value="IS">Iceland</option>
															<option value="IN">India</option>
															<option value="ID">Indonesia</option>
															<option value="IR">Iran</option>
															<option value="IQ">Iraq</option>
															<option value="IE">Ireland</option>
															<option value="IM">Isle of Man</option>
															<option value="IL">Israel</option>
															<option value="IT">Italy</option>
															<option value="CI">Ivory Coast</option>
															<option value="JM">Jamaica</option>
															<option value="JP">Japan</option>
															<option value="JE">Jersey</option>
															<option value="JO">Jordan</option>
															<option value="KZ">Kazakhstan</option>
															<option value="KE">Kenya</option>
															<option value="KI">Kiribati</option>
															<option value="KW">Kuwait</option>
															<option value="KG">Kyrgyzstan</option>
															<option value="LA">Laos</option>
															<option value="LV">Latvia</option>
															<option value="LB">Lebanon</option>
															<option value="LS">Lesotho</option>
															<option value="LR">Liberia</option>
															<option value="LY">Libya</option>
															<option value="LI">Liechtenstein</option>
															<option value="LT">Lithuania</option>
															<option value="LU">Luxembourg</option>
															<option value="MO">Macao</option>
															<option value="MG">Madagascar</option>
															<option value="MW">Malawi</option>
															<option value="MY">Malaysia</option>
															<option value="MV">Maldives</option>
															<option value="ML">Mali</option>
															<option value="MT">Malta</option>
															<option value="MH">Marshall Islands</option>
															<option value="MQ">Martinique</option>
															<option value="MR">Mauritania</option>
															<option value="MU">Mauritius</option>
															<option value="YT">Mayotte</option>
															<option value="MX">Mexico</option>
															<option value="FM">Micronesia</option>
															<option value="MD">Moldova</option>
															<option value="MC">Monaco</option>
															<option value="MN">Mongolia</option>
															<option value="ME">Montenegro</option>
															<option value="MS">Montserrat</option>
															<option value="MA">Morocco</option>
															<option value="MZ">Mozambique</option>
															<option value="MM">Myanmar</option>
															<option value="NA">Namibia</option>
															<option value="NR">Nauru</option>
															<option value="NP">Nepal</option>
															<option value="NL">Netherlands</option>
															<option value="NC">New Caledonia</option>
															<option value="NZ">New Zealand</option>
															<option value="NI">Nicaragua</option>
															<option value="NE">Niger</option>
															<option value="NG">Nigeria</option>
															<option value="NU">Niue</option>
															<option value="NF">Norfolk Island</option>
															<option value="KP">North Korea</option>
															<option value="MK">North Macedonia</option>
															<option value="MP">Northern Mariana Islands</option>
															<option value="NO">Norway</option>
															<option value="OM">Oman</option>
															<option value="PK">Pakistan</option>
															<option value="PS">Palestinian Territory</option>
															<option value="PA">Panama</option>
															<option value="PG">Papua New Guinea</option>
															<option value="PY">Paraguay</option>
															<option value="PE">Peru</option>
															<option value="PH">Philippines</option>
															<option value="PN">Pitcairn</option>
															<option value="PL">Poland</option>
															<option value="PT">Portugal</option>
															<option value="PR">Puerto Rico</option>
															<option value="QA">Qatar</option>
															<option value="RE">Reunion</option>
															<option value="RO">Romania</option>
															<option value="RU">Russia</option>
															<option value="RW">Rwanda</option>
															<option value="ST">São Tomé and Príncipe</option>
															<option value="BL">Saint Barthélemy</option>
															<option value="SH">Saint Helena</option>
															<option value="KN">Saint Kitts and Nevis</option>
															<option value="LC">Saint Lucia</option>
															<option value="SX">Saint Martin (Dutch part)</option>
															<option value="MF">Saint Martin (French part)</option>
															<option value="PM">Saint Pierre and Miquelon</option>
															<option value="VC">Saint Vincent and the Grenadines</option>
															<option value="WS">Samoa</option>
															<option value="SM">San Marino</option>
															<option value="SA">Saudi Arabia</option>
															<option value="SN">Senegal</option>
															<option value="RS">Serbia</option>
															<option value="SC">Seychelles</option>
															<option value="SL">Sierra Leone</option>
															<option value="SG">Singapore</option>
															<option value="SK">Slovakia</option>
															<option value="SI">Slovenia</option>
															<option value="SB">Solomon Islands</option>
															<option value="SO">Somalia</option>
															<option value="ZA">South Africa</option>
															<option value="GS">South Georgia/Sandwich Islands</option>
															<option value="KR">South Korea</option>
															<option value="SS">South Sudan</option>
															<option value="ES">Spain</option>
															<option value="LK">Sri Lanka</option>
															<option value="SD">Sudan</option>
															<option value="SR">Suriname</option>
															<option value="SJ">Svalbard and Jan Mayen</option>
															<option value="SZ">Swaziland</option>
															<option value="SE">Sweden</option>
															<option value="CH">Switzerland</option>
															<option value="SY">Syria</option>
															<option value="TW">Taiwan</option>
															<option value="TJ">Tajikistan</option>
															<option value="TZ">Tanzania</option>
															<option value="TH">Thailand</option>
															<option value="TL">Timor-Leste</option>
															<option value="TG">Togo</option>
															<option value="TK">Tokelau</option>
															<option value="TO">Tonga</option>
															<option value="TT">Trinidad and Tobago</option>
															<option value="TN">Tunisia</option>
															<option value="TR">Turkey</option>
															<option value="TM">Turkmenistan</option>
															<option value="TC">Turks and Caicos Islands</option>
															<option value="TV">Tuvalu</option>
															<option value="UG">Uganda</option>
															<option value="UA">Ukraine</option>
															<option value="AE">United Arab Emirates</option>
															<option value="GB">United Kingdom (UK)</option>
															<option value="US" selected="selected">United States (US)</option>
															<option value="UM">United States (US) Minor Outlying Islands</option>
															<option value="UY">Uruguay</option>
															<option value="UZ">Uzbekistan</option>
															<option value="VU">Vanuatu</option>
															<option value="VA">Vatican</option>
															<option value="VE">Venezuela</option>
															<option value="VN">Vietnam</option>
															<option value="VG">Virgin Islands (British)</option>
															<option value="VI">Virgin Islands (US)</option>
															<option value="WF">Wallis and Futuna</option>
															<option value="EH">Western Sahara</option>
															<option value="YE">Yemen</option>
															<option value="ZM">Zambia</option>
															<option value="ZW">Zimbabwe</option>
														</select>
													</span>
												</p>
												<p class="form-row address-field validate-required form-row-wide" id="billing_address_1_field" data-priority="50">
													<label for="billing_address_1" class="">Street address&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper">
														<input
															type="text"
															class="input-text"
															name="billing_address_1"
															id="billing_address_1"
															placeholder="House number and street name"
															autocomplete="address-line1"
															data-placeholder="House number and street name"
														/>
													</span>
												</p>
												<p class="form-row address-field form-row-wide" id="billing_address_2_field" data-priority="60">
													<label for="billing_address_2" class="screen-reader-text">Apartment, suite, unit, etc. (optional)&nbsp;<span class="optional">(optional)</span></label>
													<span class="woocommerce-input-wrapper">
														<input
															type="text"
															class="input-text"
															name="billing_address_2"
															id="billing_address_2"
															placeholder="Apartment, suite, unit, etc. (optional)"
															autocomplete="address-line2"
															data-placeholder="Apartment, suite, unit, etc. (optional)"
														/>
													</span>
												</p>
												<p class="form-row address-field validate-required form-row-wide" id="billing_city_field" data-priority="70" data-o_class="form-row form-row-wide address-field validate-required">
													<label for="billing_city" class="">Town / City&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper"><input type="text" class="input-text" name="billing_city" id="billing_city" placeholder="" autocomplete="address-level2" /></span>
												</p>
												<p
													class="form-row address-field validate-required validate-state form-row-wide"
													id="billing_state_field"
													data-priority="80"
													data-o_class="form-row form-row-wide address-field validate-required validate-state"
												>
													<label for="billing_state" class="">State&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper">
														<select
															name="billing_state"
															id="billing_state"
															class="state_select select2-hidden-accessible"
															autocomplete="address-level1"
															data-placeholder="Select an option…"
															data-input-classes=""
															tabindex="-1"
															aria-hidden="true"
														>
															<option value="">Select an option…</option>
															<option value="AL">Alabama</option>
															<option value="AK">Alaska</option>
															<option value="AZ">Arizona</option>
															<option value="AR">Arkansas</option>
															<option value="CA">California</option>
															<option value="CO">Colorado</option>
															<option value="CT">Connecticut</option>
															<option value="DE">Delaware</option>
															<option value="DC">District Of Columbia</option>
															<option value="FL">Florida</option>
															<option value="GA">Georgia</option>
															<option value="HI">Hawaii</option>
															<option value="ID">Idaho</option>
															<option value="IL">Illinois</option>
															<option value="IN">Indiana</option>
															<option value="IA">Iowa</option>
															<option value="KS">Kansas</option>
															<option value="KY">Kentucky</option>
															<option value="LA">Louisiana</option>
															<option value="ME">Maine</option>
															<option value="MD">Maryland</option>
															<option value="MA">Massachusetts</option>
															<option value="MI">Michigan</option>
															<option value="MN">Minnesota</option>
															<option value="MS">Mississippi</option>
															<option value="MO">Missouri</option>
															<option value="MT">Montana</option>
															<option value="NE">Nebraska</option>
															<option value="NV">Nevada</option>
															<option value="NH">New Hampshire</option>
															<option value="NJ">New Jersey</option>
															<option value="NM">New Mexico</option>
															<option value="NY" selected="selected">New York</option>
															<option value="NC">North Carolina</option>
															<option value="ND">North Dakota</option>
															<option value="OH">Ohio</option>
															<option value="OK">Oklahoma</option>
															<option value="OR">Oregon</option>
															<option value="PA">Pennsylvania</option>
															<option value="RI">Rhode Island</option>
															<option value="SC">South Carolina</option>
															<option value="SD">South Dakota</option>
															<option value="TN">Tennessee</option>
															<option value="TX">Texas</option>
															<option value="UT">Utah</option>
															<option value="VT">Vermont</option>
															<option value="VA">Virginia</option>
															<option value="WA">Washington</option>
															<option value="WV">West Virginia</option>
															<option value="WI">Wisconsin</option>
															<option value="WY">Wyoming</option>
															<option value="AA">Armed Forces (AA)</option>
															<option value="AE">Armed Forces (AE)</option>
															<option value="AP">Armed Forces (AP)</option>
														</select>
													</span>
												</p>
												<p
													class="form-row address-field validate-required validate-postcode form-row-wide"
													id="billing_postcode_field"
													data-priority="90"
													data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
												>
													<label for="billing_postcode" class="">ZIP&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper"><input type="text" class="input-text" name="billing_postcode" id="billing_postcode" placeholder="" autocomplete="postal-code" /></span>
												</p>
												<p class="form-row form-row-wide validate-required validate-phone" id="billing_phone_field" data-priority="100">
													<label for="billing_phone" class="">Phone&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper"><input type="tel" class="input-text" name="billing_phone" id="billing_phone" placeholder="" autocomplete="tel" /></span>
												</p>
												<p class="form-row form-row-wide validate-required validate-email" id="billing_email_field" data-priority="110">
													<label for="billing_email" class="">Email address&nbsp;<abbr class="required" title="required">*</abbr></label>
													<span class="woocommerce-input-wrapper"><input type="email" class="input-text" name="billing_email" id="billing_email" placeholder="" autocomplete="email username" /></span>
												</p>
											</div>
										</div>
									</div>

									<div class="col-2">
										<div class="c-cart__form woocommerce-shipping-fields"></div>
										<div class="woocommerce-additional-fields">
											<h3>Additional information</h3>

											<div class="woocommerce-additional-fields__field-wrapper">
												<p class="form-row notes" id="order_comments_field" data-priority="">
													<label for="order_comments" class="">Order notes&nbsp;<span class="optional">(optional)</span></label>
													<span class="woocommerce-input-wrapper">
														<textarea name="order_comments" class="input-text" id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea>
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="c-cart__col-2">
							<div class="c-cart__collaterals collaterals checkout-collaterals js-sticky-sidebar" style="">
								<div class="c-cart__coupon">
									<a href="#" class="js-cart-coupon">
										<div class="c-cart__sub-header">
											Coupon code <svg class="c-cart__select-svg"><use xlink:href="#svg-select"></use></svg>
										</div>
									</a>

									<div class="c-cart__coupon-from-wrap">
										<div class="c-cart__coupon-form">
											<input type="text" name="coupon_code" class="input-text" id="coupon_code" placeholder="Coupon code" />
											<button class="c-cart__coupon-apply button" id="ip-checkout-apply-coupon" name="apply_coupon" type="button">Apply coupon</button>
										</div>
									</div>
								</div>
								<div class="c-cart__sub-header" id="order_review_heading">Your order</div>
								<div id="order_review" class="c-cart__review-order woocommerce-checkout-review-order">
									<table class="c-cart__totals-table shop_table woocommerce-checkout-review-order-table">
										<thead>
											<tr>
												<th class="c-cart__totals-th product-name">Product</th>
												<th class="c-cart__totals-th c-cart__totals-th--product-total product-total">Subtotal</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td colspan="2" class="c-cart__totals-product-space"></td>
											</tr>
											<tr class="c-cart__totals-product cart_item">
												<td class="c-cart__totals-product-name">Pizza Bianca&nbsp; <strong class="c-cart__totals-product-quantity product-quantity">×&nbsp;1</strong></td>
												<td class="c-cart__totals-price">
													<span class="woocommerce-Price-amount amount">
														<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
													</span>
												</td>
											</tr>
										</tbody>
										<tfoot>
											<tr>
												<td colspan="2" class="c-cart__totals-space c-cart__totals-space--hr"></td>
											</tr>

											<tr class="cart-subtotal">
												<th class="c-cart__sub-header">Subtotal</th>
												<td class="c-cart__totals-price">
													<span class="woocommerce-Price-amount amount">
														<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
													</span>
												</td>
											</tr>

											<tr>
												<td colspan="2" class="c-cart__collaterals-hr"></td>
											</tr>

											<tr class="order-total">
												<th class="c-cart__sub-header">Total</th>
												<td class="c-cart__totals-price c-cart__totals-price--total" data-title="Total">
													<strong>
														<span class="woocommerce-Price-amount amount">
															<bdi><span class="woocommerce-Price-currencySymbol">$</span>13.99</bdi>
														</span>
													</strong>
												</td>
											</tr>

											<tr>
												<td colspan="2" class="c-cart__collaterals-hr"></td>
											</tr>
										</tfoot>
									</table>

									<div id="payment" class="woocommerce-checkout-payment">
										<div class="c-cart__sub-header">Payment Method</div>
										<ul class="c-cart__payment-methods wc_payment_methods payment_methods methods">
											<li class="wc_payment_method payment_method_bacs">
												<span class="c-cart__payment-methods-wrap">
													<input id="payment_method_bacs" type="radio" class="c-cart__payment-method-radio input-radio" name="payment_method" value="bacs" checked="checked" data-order_button_text="" /><i></i>
												</span>

												<label class="c-cart__payment-methods-title" for="payment_method_bacs"> Direct bank transfer </label>
												<div class="c-cart__payment-methods-box payment_box payment_method_bacs">
													<p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
												</div>
											</li>
											<li class="wc_payment_method payment_method_cod">
												<span class="c-cart__payment-methods-wrap">
													<input id="payment_method_cod" type="radio" class="c-cart__payment-method-radio input-radio" name="payment_method" value="cod" data-order_button_text="" /><i></i>
												</span>

												<label class="c-cart__payment-methods-title" for="payment_method_cod"> Cash on delivery </label>
												<div class="c-cart__payment-methods-box payment_box payment_method_cod" style="display: none;">
													<p>Pay with cash upon delivery.</p>
												</div>
											</li>
										</ul>
										<div class="c-cart__place-order form-row place-order">
											<noscript>
												Since your browser does not support JavaScript, or it is disabled, please ensure you click the <em>Update Totals</em> button before placing your order. You may be charged more than the
												amount stated above if you fail to do so. <br />
												<button type="submit" class="button alt" name="woocommerce_checkout_update_totals" value="Update totals">Update totals</button>
											</noscript>

											<div class="woocommerce-terms-and-conditions-wrapper">
												<div class="woocommerce-privacy-policy-text">
													<p>
														Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
														<a href="https://parkofideas.com/foodz/demo1/?page_id=3" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.
													</p>
												</div>
												<div class="woocommerce-terms-and-conditions" style="display: none; max-height: 200px; overflow: auto;"><p>Text goes here</p></div>
												<p class="form-row validate-required">
													<label class="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
														<input type="checkbox" class="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" name="terms" id="terms" /><i></i>
														<span class="woocommerce-terms-and-conditions-checkbox-text">
															I have read and agree to the website
															<a href="https://parkofideas.com/foodz/demo1/terms-and-conditions/" class="woocommerce-terms-and-conditions-link" target="_blank">terms and conditions</a>
														</span>
														&nbsp;<span class="required">*</span>
													</label>
													<input type="hidden" name="terms-field" value="1" />
												</p>
											</div>

											<button type="submit" class="c-form__button c-cart__place-order-btn button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order">
												Place order
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	
}
</script>