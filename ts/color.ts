class Color {
	public codes: string = "0123456789ABCDEF"

	generate() :string {
		let color:string = '#'
		for (let i:number = 0; i < 6; i++) {
			color += this.codes.charAt(Math.floor(Math.random() * 16))
		}

		return color;
	}

	setBgColor(cmp:any = document.getElementsByTagName('body')[0]) :void {
		cmp.style.backgroundColor = this.generate();
	}
}

let obj = new Color();

let button = document.getElementById('click-btn');
button.onclick = function () {
	obj.setBgColor()
	obj.setBgColor(button)
}