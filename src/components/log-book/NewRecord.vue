<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Form Example</h6>
          </d-card-header>

          <d-list-group flush>
            <d-list-group-item class="p-3">
              <d-row>
                <d-col>
                  <d-form>
                    <d-form-row>
                      <d-col md="6" class="form-group">
                        <label for="feEmailAddress">Email</label>
                        <d-input
                          id="feEmailAddress"
                          type="email"
                          placeholder="Email"
                        />
                      </d-col>
                      <d-col md="6">
                        <label for="fePassword">Password</label>
                        <d-input
                          id="fePassword"
                          type="password"
                          placeholder="Password"
                        />
                      </d-col>
                    </d-form-row>

                    <!-- vue - select -->
                    <div class="form-group">
                      <label for="v-select">Vue - select</label>
                      <v-select
                        id="v-select"
                        label="countryName"
                        v-model="countryName"
                        :options="countriesOptions"
                      ></v-select>
                      {{ countryName }}
                    </div>
                    <!-- / vue - select -->

                    <!-- Checkboxes -->
                    <strong class="text-muted d-block mb-2">Checkboxes</strong>
                    <fieldset>
                      <div class="custom-control custom-checkbox mb-1">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="formsCheckboxDefault"
                        />
                        <label
                          class="custom-control-label"
                          for="formsCheckboxDefault"
                          >Default</label
                        >
                      </div>
                      <div class="custom-control custom-checkbox mb-1">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="formsCheckboxChecked"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="formsCheckboxChecked"
                          >Checked</label
                        >
                      </div>
                      <div class="custom-control custom-checkbox mb-1">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="formsCheckboxDisabled"
                          disabled
                        />
                        <label
                          class="custom-control-label"
                          for="formsCheckboxDisabled"
                          >Disabled</label
                        >
                      </div>
                      <div class="custom-control custom-checkbox mb-1">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id="formsCheckboxDisabledChecked"
                          disabled
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="formsCheckboxDisabledChecked"
                          >Disabled Checked</label
                        >
                      </div>
                    </fieldset>
                    <!-- / Checkboxes -->

                    <!-- Radios -->
                    <strong class="text-muted d-block mb-2"
                      >Radio Buttons</strong
                    >
                    <fieldset>
                      <div class="custom-control custom-radio mb-1">
                        <input
                          type="radio"
                          id="formsRadioDefault"
                          name="formsRadioDefault"
                          class="custom-control-input"
                        />
                        <label
                          class="custom-control-label"
                          for="formsRadioDefault"
                          >Default</label
                        >
                      </div>
                      <div class="custom-control custom-radio mb-1">
                        <input
                          type="radio"
                          id="formsRadioChecked"
                          name="formsRadioChecked"
                          class="custom-control-input"
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="formsRadioChecked"
                          >Checked</label
                        >
                      </div>
                      <div class="custom-control custom-radio mb-1">
                        <input
                          type="radio"
                          id="formsRadioDisabled"
                          name="formsRadioDisabled"
                          class="custom-control-input"
                          disabled
                        />
                        <label
                          class="custom-control-label"
                          for="formsRadioDisabled"
                          >Disabled</label
                        >
                      </div>
                      <div class="custom-control custom-radio mb-1">
                        <input
                          type="radio"
                          id="formsRadioDisabledChecked"
                          name="formsRadioDisabledChecked"
                          class="custom-control-input"
                          disabled
                          checked
                        />
                        <label
                          class="custom-control-label"
                          for="formsRadioDisabledChecked"
                          >Disabled Checked</label
                        >
                      </div>
                    </fieldset>
                    <!-- / Radios -->

                    <!-- Small Buttons -->
                    <strong class="text-muted d-block my-2"
                      >Small Buttons</strong
                    >
                    <div class="row mb-3">
                      <div class="col">
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-primary mr-1"
                        >
                          Primary
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-secondary mr-1"
                        >
                          Secondary
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-success mr-1"
                        >
                          Success
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-danger mr-1"
                        >
                          Danger
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-warning mr-1"
                        >
                          Warning
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-info mr-1"
                        >
                          Info
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-dark mr-1"
                        >
                          Dark
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-white mr-1"
                        >
                          White
                        </button>
                      </div>
                    </div>
                    <!-- / Small Buttons -->
                    <!-- Small Outline Buttons -->
                    <strong class="text-muted d-block mb-2"
                      >Small Outline Buttons</strong
                    >
                    <div class="row">
                      <div class="col">
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-outline-primary mr-1"
                        >
                          Primary
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-outline-secondary mr-1"
                        >
                          Secondary
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-outline-success mr-1"
                        >
                          Success
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-outline-danger mr-1"
                        >
                          Danger
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-outline-warning mr-1"
                        >
                          Warning
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-outline-info mr-1"
                        >
                          Info
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-outline-dark mr-1"
                        >
                          Dark
                        </button>
                        <button
                          type="button"
                          class="mb-2 btn btn-sm btn-outline-light mr-1"
                        >
                          Light
                        </button>
                      </div>
                    </div>
                    <!-- / Small Outline Buttons -->

                    <!-- Progress Bars -->
                    <div class="mb-2">
                      <strong class="text-muted d-block mb-3"
                        >Progress Bars</strong
                      >
                      <div class="progress progress-sm mb-3">
                        <div
                          id="progress-bar-example-1"
                          class="progress-bar"
                          role="progressbar"
                          style="width: 20%"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress progress-sm mb-3">
                        <div
                          id="progress-bar-example-2"
                          class="progress-bar bg-info"
                          role="progressbar"
                          style="width: 40%"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress progress-sm mb-3">
                        <div
                          id="progress-bar-example-3"
                          class="progress-bar bg-danger"
                          role="progressbar"
                          style="width: 60%"
                          aria-valuenow="60"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="progress progress-sm">
                        <div
                          id="progress-bar-example-4"
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style="width: 80%"
                          aria-valuenow="80"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <!-- / Progress Bars -->

                    <div class="form-group">
                      <label for="feInputAddress">Address</label>
                      <d-input id="feInputAddress" placeholder="1234 Main St" />
                    </div>

                    <div class="form-group">
                      <label for="feInputAddress2">Address 2</label>
                      <d-input
                        id="feInputAddress2"
                        placeholder="Apartment, Studio, or Floor"
                      />
                    </div>

                    <d-form validated>
                      <d-form-row>
                        <d-col md="6" class="form-group">
                          <d-input
                            value="Vasile"
                            placeholder="First name"
                            required
                          />
                          <d-form-valid-feedback
                            >The first name looks good!</d-form-valid-feedback
                          >
                        </d-col>

                        <d-col md="6" class="form-group">
                          <d-input
                            value="Catalin"
                            placeholder="Last name"
                            required
                          />
                          <d-form-valid-feedback
                            >The last name looks good!</d-form-valid-feedback
                          >
                        </d-col>
                      </d-form-row>
                      <div class="form-group">
                        <d-input placeholder="Username" required />
                        <d-form-invalid-feedback
                          >The username is taken.</d-form-invalid-feedback
                        >
                      </div>
                      <div class="form-group">
                        <d-select required>
                          <option>Choose</option>
                          <option>...</option>
                        </d-select>
                        <d-form-invalid-feedback
                          >Please select your state</d-form-invalid-feedback
                        >
                      </div>
                    </d-form>

                    <d-form-row>
                      <d-col md="6" class="form-group">
                        <label for="feInputCity">City</label>
                        <d-input id="feInputCity" />
                      </d-col>
                      <d-col md="4" class="form-group">
                        <label for="feInputState">State</label>
                        <d-select id="feInputState">
                          <option>Choose...</option>
                          <option>...</option>
                        </d-select>
                      </d-col>
                      <d-col md="2" class="form-group">
                        <label for="feInputZip">Zip</label>
                        <d-input id="feInputZip" />
                      </d-col>
                      <d-col md="12" class="form-group">
                        <d-checkbox
                          >I agree with your
                          <a href="#">Privacy Policy</a>.</d-checkbox
                        >
                      </d-col>
                    </d-form-row>
                    <button type="button" class="btn btn-outline-success">
                      Сохранить
                    </button>
                  </d-form>
                </d-col>
              </d-row>
            </d-list-group-item>
          </d-list-group>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  data() {
    return {
      countryName: '',
      countriesOptions: [
        {
          countryCode: 'CA',
          countryName: 'Canada',
        },
        {
          countryCode: 'US',
          countryName: 'USA',
        },
      ],
    };
  },
};
</script>