import subprocess

def get_processes():
    try:
        output = subprocess.check_output(
            ['ps', '-eo', 'pid,pcpu,pmem,args'],
            text=True
        )
    except subprocess.CalledProcessError as e:
        print(f"Error executing ps command: {e}")
        return []

    lines = output.splitlines()
    if not lines:
        return []

    processes = []
    for line in lines[1:]:  # Skip header
        parts = line.strip().split(None, 3)
        if len(parts) != 4:
            continue

        pid, pcpu, pmem, command = parts
        try:
            process_info = {
                'pid': pid,
                'cpu': float(pcpu),
                'mem': float(pmem),
                'command': command
            }
            processes.append(process_info)
        except ValueError:
            continue

    return processes

def print_processes(process_list, title):
    print(f"\n{title}")
    print("PID\tCPU%\tMEM%\tCOMMAND")
    for p in process_list:
        cmd = p['command'] if len(p['command'])
