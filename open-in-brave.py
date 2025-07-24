#!/usr/bin/env python3
import sys
import json
import struct
import subprocess
import os

def read_message():
    raw_length = sys.stdin.buffer.read(4)
    if len(raw_length) == 0:
        sys.exit(0)
    message_length = struct.unpack('I', raw_length)[0]
    message = sys.stdin.buffer.read(message_length).decode('utf-8')
    return json.loads(message)

def write_message(message_content):
    encoded_content = json.dumps(message_content).encode('utf-8')
    sys.stdout.buffer.write(struct.pack('I', len(encoded_content)))
    sys.stdout.buffer.write(encoded_content)
    sys.stdout.buffer.flush()

def open_in_brave(url):
    try:
        brave_path = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
        if not os.path.exists(brave_path):
            brave_path = r"C:\Program Files (x86)\BraveSoftware\Brave-Browser\Application\brave.exe"
        subprocess.Popen([brave_path, url], shell=False)
        write_message({"status": "success"})
    except Exception as e:
        write_message({"error": str(e)})

if __name__ == "__main__":
    message = read_message()
    open_in_brave(message.get("url", ""))
