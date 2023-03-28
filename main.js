var app = new Vue({
	el: '#app',
	data: {
		songs: ['Song 1', 'Song 2', 'Song 3'],
		player: null,
		isPlaying: false,
		volume: 0.5
	},
	mounted() {
		this.player = new Howl({
			src: ['song1.mp3'],
			html5: true,
			loop: false,
			volume: this.volume,
			onplay: () => {
				this.isPlaying = true;
			},
			onpause: () => {
				this.isPlaying = false;
			},
			onstop: () => {
				this.isPlaying = false;
			},
			onend: () => {
				this.isPlaying = false;
			}
		});
	},
	methods: {
		playSong(index) {
			var songName = this.songs[index];
			this.player.unload();
			this.player = new Howl({
				src: [songName.toLowerCase().replace(' ', '') + '.mp3'],
				html5: true,
				loop: false,
				volume: this.volume,
				onplay: () => {
					this.isPlaying = true;
				},
				onpause: () => {
					this.isPlaying = false;
				},
				onstop: () => {
					this.isPlaying = false;
				},
				onend: () => {
					this.isPlaying = false;
				}
			});
			this.player.play();
		},
		playPause() {
			if (this.isPlaying) {
				this.player.pause();
			} else {
				this.player.play();
			}
		},
		stop() {
			this.player.stop();
		}
	}
});
