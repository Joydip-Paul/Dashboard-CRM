import { Component } from "@angular/core";
import { CommonService } from "src/app/service/common/common.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  isSidebar: boolean = true;

  constructor(private commonService: CommonService) {}

  expandDropdown(event: any): void {
    let dropdown = event.target.closest("li").querySelector("ul");
    let dropdownHeight = dropdown.offsetHeight;
    const dropdownScrollHeight = dropdown.scrollHeight;
    if (dropdown.classList.contains("show")) {
      let collapseInterval = setInterval(() => {
        if (dropdownHeight >= 0) {
          dropdownHeight = dropdownHeight - 5;
          dropdown.style.height = dropdownHeight + "px";
        } else {
          dropdown.removeAttribute("style");
          dropdown.classList.remove("show");
          clearInterval(collapseInterval);
        }
      }, 0);
    } else {
      let collapseInterval = setInterval(() => {
        if (dropdownHeight <= dropdownScrollHeight) {
          dropdownHeight = dropdownHeight + 5;
          dropdown.style.height = dropdownHeight + "px";
        } else {
          dropdown.removeAttribute("style");
          dropdown.classList.add("show");
          clearInterval(collapseInterval);
        }
      }, 0);
    }
  }

  ngOnInit(): void {
    this.getOpenSidebar();
  }

  getOpenSidebar() {
    this.commonService.sidebarState$.subscribe((open) => {
      this.isSidebar = !this.isSidebar;
    });
  }
}
