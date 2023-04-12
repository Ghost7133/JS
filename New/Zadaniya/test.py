from pynput import keyboard

def on_release(key):
    print(f'{key} released')
    if key == keyboard.Key.esc:
        # Stop listener
        return False

with keyboard.Listener(on_release=on_release) as listener:
    listener.join()
