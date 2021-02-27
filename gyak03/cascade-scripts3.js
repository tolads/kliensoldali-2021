// Kaszkád legördülők Adott egy legördülő menü, benne az opciók csoportosítva. Alakítsd át ezt úgy, hogy két legördülő legyen: az elsőben a csoportok neve, majd abból választva a másodikban a csoporton belüli opciók jelenjenek meg!
class CascadeDropdown extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    console.log("constructor");
  }

  connectedCallback() {
    console.log("connectedCallback");
    this.origSelect = this.shadowRoot.host.querySelector("select");
    this.collect();
    this.updateDOM();
  }

  collect = () => {
    this.items = new Map();
    this.origSelect.querySelectorAll("optgroup").forEach((group) => {
      const options = Array.from(
        group.querySelectorAll("option")
      ).map(({ value, innerHTML }) => ({ value, label: innerHTML }));
      this.items.set(group.label, options);
    });
  };

  fillOptions(groupName) {
    this.childSelect.innerHTML = Array.from(this.items.get(groupName))
      .map(
        (option) => `<option value="${option.value}">${option.label}</option>`
      )
      .join("");
  }

  updateDOM = () => {
    const template = document.querySelector("#cascade-dropdown-template");
    const content = template.content.cloneNode(true);
    this.shadowRoot.appendChild(content);

    // Parent element
    const parent = this.origSelect.parentNode;

    // Create group selector
    this.groupSelect = this.shadowRoot.querySelector("select.group");
    this.groupSelect.innerHTML = Array.from(this.items.keys())
      .map((groupName) => `<option value="${groupName}">${groupName}</option>`)
      .join("");
    this.groupSelect.addEventListener("change", this.handleGroupChange);

    // Create child select
    this.childSelect = this.shadowRoot.querySelector("select.option");
    const key = Array.from(this.items.keys())[0];
    this.fillOptions(key);
    this.childSelect.name = this.origSelect.name;
    this.childSelect.addEventListener("change", this.handleOptionChange);
  };

  handleGroupChange = (event) => {
    this.fillOptions(event.target.value);
    this.handleOptionChange();
  };

  handleOptionChange = () => {
    this.origSelect.value = this.childSelect.value;
  };
}

customElements.define("cascade-dropdown", CascadeDropdown);
