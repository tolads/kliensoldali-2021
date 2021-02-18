// Kaszkád legördülők Adott egy legördülő menü, benne az opciók csoportosítva. Alakítsd át ezt úgy, hogy két legördülő legyen: az elsőben a csoportok neve, majd abból választva a másodikban a csoporton belüli opciók jelenjenek meg!
class Cascade {
  constructor(origSelect) {
    this.origSelect = origSelect;
    this.collect();
    this.updateDOM();
  }

  collect = () => {
    this.items = new Map();
    this.origSelect.querySelectorAll("optgroup").forEach((group) => {
      // 1.
      // const options = Array.from(group.querySelectorAll("option")).map(
      //   (option) => {
      //     return {
      //       value: option.value,
      //       label: option.innerHTML,
      //     };
      //   }
      // );

      // 2.
      // const options = Array.from(group.querySelectorAll("option")).map(
      //   (option) => ({
      //     value: option.value,
      //     label: option.innerHTML,
      //   })
      // );

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
    // Parent element
    const parent = this.origSelect.parentNode;

    // Create group selector
    this.groupSelect = document.createElement("select");
    parent.insertBefore(this.groupSelect, this.origSelect);
    this.groupSelect.innerHTML = Array.from(this.items.keys())
      .map((groupName) => `<option value="${groupName}">${groupName}</option>`)
      .join("");
    this.groupSelect.addEventListener("change", this.handleChange);

    // Create child select
    this.childSelect = document.createElement("select");
    parent.insertBefore(this.childSelect, this.origSelect);
    const key = Array.from(this.items.keys())[0];
    this.fillOptions(key);
    this.childSelect.name = this.origSelect.name;

    parent.removeChild(this.origSelect);
  };

  handleChange = (event) => {
    this.fillOptions(event.target.value);
  };
}

new Cascade(document.querySelector("select[name='pets']"));
