(()=>{"use strict";const e=function(){document.querySelector(".home-btn").classList.add("active");const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("home");const t=document.createElement("p");t.textContent=" We confidently boast of being the best eatery in the country. ";const n=document.createElement("img");n.src="images/home.jpg";const c=document.createElement("p");return c.textContent="Eat quality food with good taste",e.appendChild(t),e.appendChild(n),e.appendChild(c),e}())};(function(){const e=document.querySelector("#content");e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const t=document.createElement("h1");t.classList.add("name"),t.textContent="Delicio Kitchen";const n=document.createElement("nav"),c=document.createElement("button");c.classList.add("home-btn"),c.textContent="Home";const a=document.createElement("button");a.classList.add("menu-btn"),a.textContent="Menu";const d=document.createElement("button");return d.classList.add("contact-btn"),d.textContent="Contact",n.appendChild(c),n.appendChild(a),n.appendChild(d),e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e}())})(),e(),function(){const t=document.querySelector(".home-btn"),n=document.querySelector(".menu-btn"),c=document.querySelector(".contact-btn");document.querySelectorAll("button").forEach((a=>{a.addEventListener("click",(function(a){"Menu"===a.target.textContent?(n.classList.add("active"),t.classList.remove("active"),c.classList.remove("active"),function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div"),n=document.createElement("img"),c=document.createElement("div");c.textContent="Egusi Soup",n.src="images/egusi.jpg",t.appendChild(n),t.appendChild(c),e.appendChild(t);const a=document.createElement("div"),d=document.createElement("img"),o=document.createElement("div");o.textContent="African Salad",d.src="images/africanSalad.png",a.appendChild(d),a.appendChild(o),e.appendChild(a);const i=document.createElement("div"),m=document.createElement("img"),s=document.createElement("div");s.textContent="Oha Soup",m.src="images/oha.jpg",i.appendChild(m),i.appendChild(s),e.appendChild(i);const l=document.createElement("div"),r=document.createElement("img"),u=document.createElement("div");u.textContent="Vegetable Soup",r.src="images/vegetable.jpg",l.appendChild(r),l.appendChild(u),e.appendChild(l);const p=document.createElement("div"),C=document.createElement("img"),h=document.createElement("div");h.textContent="Okpa",C.src="images/okpa.png",p.appendChild(C),p.appendChild(h),e.appendChild(p);const E=document.createElement("div"),g=document.createElement("img"),v=document.createElement("div");return v.textContent="Bitter Leaf Soup",g.src="images/bitterLeaf.jpeg",E.appendChild(g),E.appendChild(v),e.appendChild(E),e}())}()):"Contact"===a.target.textContent?(n.classList.remove("active"),t.classList.remove("active"),c.classList.add("active"),function(){const e=document.querySelector(".main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const t=document.createElement("img");t.src="images/contact.png";const n=document.createElement("p");return n.classList.add("contact-para"),n.textContent="We are located at No 56 Kashim Ibrahim Street off constitution road, Angwan Remi, Kaduna, Kaduna state, Nigeria. TEL +2348461330981",e.appendChild(t),e.appendChild(n),e}())}()):"Home"===a.target.textContent&&(n.classList.remove("active"),t.classList.add("active"),c.classList.remove("active"),e())}))}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UXJCLFVBQVU4QixPQUFPLFVBQ3pCUCxFQUFXdkIsVUFBVUMsSUFBSSxVRVB6QyxXQUNJLE1BQU1DLEVBQU9KLFNBQVNDLGNBQWMsU0FDcENHLEVBQUtDLFlBQWMsR0FDbkJELEVBQUtFLFlBckJULFdBQ0ksTUFBTStDLEVBQVVyRCxTQUFTUSxjQUFjLE9BQ3ZDNkMsRUFBUW5ELFVBQVVDLElBQUksV0FFdEIsTUFBTW1ELEVBQWV0RCxTQUFTUSxjQUFjLE9BQzVDOEMsRUFBYTNDLElBQU0scUJBR25CLE1BQU00QyxFQUFldkQsU0FBU1EsY0FBYyxLQU81QyxPQU5BK0MsRUFBYXJELFVBQVVDLElBQUksZ0JBQzNCb0QsRUFBYWxELFlBQWMsc0lBRTNCZ0QsRUFBUS9DLFlBQVlnRCxHQUNwQkQsRUFBUS9DLFlBQVlpRCxHQUViRixDQUNYLENBS3FCRyxHQUNyQixDRklnQixJQUU4QixTQUF6QjFCLEVBQUVDLE9BQU8xQixjQUNkbUIsRUFBUXRCLFVBQVU4QixPQUFPLFVBQ3pCVCxFQUFRckIsVUFBVUMsSUFBSSxVQUN0QnNCLEVBQVd2QixVQUFVOEIsT0FBTyxVQUM1QixJQUVSLEdBQUMsR0FFVCxDQUNBeUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBcbiAgICBjb25zdCBmaXJzdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmlyc3RQYXJhLnRleHRDb250ZW50ID0gJyBXZSBjb25maWRlbnRseSBib2FzdCBvZiBiZWluZyB0aGUgYmVzdCBlYXRlcnkgaW4gdGhlIGNvdW50cnkuICdcblxuICAgIGNvbnN0IGhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVJbWFnZS5zcmMgPSAnaW1hZ2VzL2hvbWUuanBnJztcblxuICAgIGNvbnN0IHNlY29uZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBzZWNvbmRQYXJhLnRleHRDb250ZW50ID0gJ0VhdCBxdWFsaXR5IGZvb2Qgd2l0aCBnb29kIHRhc3RlJztcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoZmlyc3RQYXJhKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVJbWFnZSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChzZWNvbmRQYXJhKTtcblxuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnRuJyk7XG4gICAgaG9tZUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lXG4gICAgXG4gICAiLCJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHsgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpOyBcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuICAgIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ0RlbGljaW8gS2l0Y2hlbic7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdob21lLWJ0bicpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWJ0bicpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWJ0bicpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gbG9hZFNpdGUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkU2l0ZSIsImltcG9ydCBsb2FkU2l0ZSBmcm9tICcuL3dlYnNpdGUuanMnXG5pbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9ob21lLmpzJ1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbWVudS5qcydcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnXG5cbmxvYWRTaXRlKCk7XG5sb2FkSG9tZSgpXG5cbmZ1bmN0aW9uIGFkZEV2ZW50cygpIHtcbiAgICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnRuJylcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtYnRuJyk7XG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWJ0bicpO1xuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZihlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ01lbnUnKSB7XG4gICAgICAgICAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBob21lQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbG9hZE1lbnUoKTtcblxuICAgICAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdDb250YWN0Jykge1xuICAgICAgICAgICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgaG9tZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGxvYWRDb250YWN0KCk7XG5cbiAgICAgICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnSG9tZScpIHtcbiAgICAgICAgICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgY29udGFjdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsb2FkSG9tZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5hZGRFdmVudHMoKVxuXG5cblxuXG5cbiIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgY29uc3QgaXN0TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1hZ2VUZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlVGV4dDEudGV4dENvbnRlbnQgPSAnRWd1c2kgU291cCc7XG4gICAgaW1hZ2VPbmUuc3JjID0gJ2ltYWdlcy9lZ3VzaS5qcGcnO1xuICAgIGlzdE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VPbmUpO1xuICAgIGlzdE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VUZXh0MSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpc3RNZW51KTtcblxuICAgIGNvbnN0IHNlY29uZE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQyLnRleHRDb250ZW50ID0gJ0FmcmljYW4gU2FsYWQnO1xuICAgIGltYWdlVHdvLnNyYyA9ICdpbWFnZXMvYWZyaWNhblNhbGFkLnBuZyc7XG4gICAgc2Vjb25kTWVudS5hcHBlbmRDaGlsZChpbWFnZVR3byk7XG4gICAgc2Vjb25kTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHNlY29uZE1lbnUpO1xuXG4gICAgY29uc3QgdGhpcmRNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGltYWdlVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZVRleHQzLnRleHRDb250ZW50ID0gJ09oYSBTb3VwJztcbiAgICBpbWFnZVRocmVlLnNyYyA9ICdpbWFnZXMvb2hhLmpwZyc7XG4gICAgdGhpcmRNZW51LmFwcGVuZENoaWxkKGltYWdlVGhyZWUpO1xuICAgIHRoaXJkTWVudS5hcHBlbmRDaGlsZChpbWFnZVRleHQzKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHRoaXJkTWVudSk7XG5cbiAgICBjb25zdCBmb3VydGhNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1hZ2VGb3VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1hZ2VUZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlVGV4dDQudGV4dENvbnRlbnQgPSAnVmVnZXRhYmxlIFNvdXAnO1xuICAgIGltYWdlRm91ci5zcmMgPSAnaW1hZ2VzL3ZlZ2V0YWJsZS5qcGcnO1xuICAgIGZvdXJ0aE1lbnUuYXBwZW5kQ2hpbGQoaW1hZ2VGb3VyKTtcbiAgICBmb3VydGhNZW51LmFwcGVuZENoaWxkKGltYWdlVGV4dDQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZm91cnRoTWVudSk7XG5cbiAgICBjb25zdCBmaWZ0aE1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbWFnZUZpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBpbWFnZVRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW1hZ2VUZXh0NS50ZXh0Q29udGVudCA9ICdPa3BhJztcbiAgICBpbWFnZUZpdmUuc3JjID0gJ2ltYWdlcy9va3BhLnBuZyc7XG4gICAgZmlmdGhNZW51LmFwcGVuZENoaWxkKGltYWdlRml2ZSk7XG4gICAgZmlmdGhNZW51LmFwcGVuZENoaWxkKGltYWdlVGV4dDUpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZmlmdGhNZW51KTtcblxuICAgIGNvbnN0IHNpeHRoTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltYWdlU2l4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgaW1hZ2VUZXh0NiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlVGV4dDYudGV4dENvbnRlbnQgPSAnQml0dGVyIExlYWYgU291cCc7XG4gICAgaW1hZ2VTaXguc3JjID0gJ2ltYWdlcy9iaXR0ZXJMZWFmLmpwZWcnO1xuICAgIHNpeHRoTWVudS5hcHBlbmRDaGlsZChpbWFnZVNpeCk7XG4gICAgc2l4dGhNZW51LmFwcGVuZENoaWxkKGltYWdlVGV4dDYpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2l4dGhNZW51KTtcblxuICAgIHJldHVybiBtZW51O1xufVxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGNvbnRhY3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnRhY3RJbWFnZS5zcmMgPSAnaW1hZ2VzL2NvbnRhY3QucG5nJztcbiAgIFxuXG4gICAgY29uc3QgY29udGFjdFBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RQYXJhMS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXBhcmEnKTtcbiAgICBjb250YWN0UGFyYTEudGV4dENvbnRlbnQgPSAnV2UgYXJlIGxvY2F0ZWQgYXQgTm8gNTYgS2FzaGltIElicmFoaW0gU3RyZWV0IG9mZiBjb25zdGl0dXRpb24gcm9hZCwgQW5nd2FuIFJlbWksIEthZHVuYSwgS2FkdW5hIHN0YXRlLCBOaWdlcmlhLiBURUwgKzIzNDg0NjEzMzA5ODEnXG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGNvbnRhY3RJbWFnZSk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChjb250YWN0UGFyYTEpOyBcblxuICAgIHJldHVybiBjb250YWN0O1xufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0KCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ29udGFjdDsiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwibWFpbiIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJob21lIiwiY3JlYXRlRWxlbWVudCIsImZpcnN0UGFyYSIsImhvbWVJbWFnZSIsInNyYyIsInNlY29uZFBhcmEiLCJjcmVhdGVIb21lIiwiY29udGVudCIsImhlYWRlciIsInJlc3RhdXJhbnROYW1lIiwibmF2IiwiaG9tZUJ1dHRvbiIsIm1lbnVCdXR0b24iLCJjb250YWN0QnV0dG9uIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlTWFpbiIsImhvbWVCdG4iLCJtZW51QnRuIiwiY29udGFjdEJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJyZW1vdmUiLCJtZW51IiwiaXN0TWVudSIsImltYWdlT25lIiwiaW1hZ2VUZXh0MSIsInNlY29uZE1lbnUiLCJpbWFnZVR3byIsImltYWdlVGV4dDIiLCJ0aGlyZE1lbnUiLCJpbWFnZVRocmVlIiwiaW1hZ2VUZXh0MyIsImZvdXJ0aE1lbnUiLCJpbWFnZUZvdXIiLCJpbWFnZVRleHQ0IiwiZmlmdGhNZW51IiwiaW1hZ2VGaXZlIiwiaW1hZ2VUZXh0NSIsInNpeHRoTWVudSIsImltYWdlU2l4IiwiaW1hZ2VUZXh0NiIsImNyZWF0ZU1lbnUiLCJjb250YWN0IiwiY29udGFjdEltYWdlIiwiY29udGFjdFBhcmExIiwiY3JlYXRlQ29udGFjdCIsImFkZEV2ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=