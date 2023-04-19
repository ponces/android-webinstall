const DEVICE_NAMES = {
    renoir: "Xiaomi Mi 11 Lite 5G",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
