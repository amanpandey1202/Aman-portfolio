import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaMicrochip, FaTerminal, FaWifi, FaMusic, FaPlay, FaPause, FaSyncAlt } from 'react-icons/fa'

const hardwarePresets = [
  {
    id: 'chatroom',
    title: 'Aman\'s Chatroom (ESP32 WebSocket)',
    icon: FaWifi,
    baudRate: 115200,
    logs: [
      '[SYSTEM] Initializing ESP32 Board Core 0...',
      '[WIFI] Connecting to SSID: Aman_Node_Net...',
      '[WIFI] Connected! IP Address: 192.168.1.104',
      '[WS] WebSocket Server started on port 81',
      '[WS] Client #1 Connected (Device: Chrome Mobile)',
      '[MSG] User: "Hello from ESP32 Chatroom!"',
      '[WS] Broadcasting message to 3 connected peers...',
      '[STATS] Memory Free: 245,120 bytes | Uptime: 04:12:09',
    ],
    pinout: [
      { pin: 'GPIO2', label: 'Status LED', status: 'HIGH' },
      { pin: 'GPIO4', label: 'TX Serial', status: 'ACTIVE' },
      { pin: 'GPIO5', label: 'RX Serial', status: 'ACTIVE' },
      { pin: 'EN', label: 'Reset Pin', status: 'READY' },
    ],
  },
  {
    id: 'piano',
    title: 'Pencil Piano (Capacitive Touch Synth)',
    icon: FaMusic,
    baudRate: 9600,
    logs: [
      '[SYSTEM] Initializing Touch Sensor Pins T0-T7...',
      '[CALIB] Calibrating graphite key thresholds...',
      '[TOUCH] Key #1 (C4) Pressed! Touch Read: 12 (Threshold: 40)',
      '[AUDIO] Generating 261.63 Hz sine wave output...',
      '[TOUCH] Key #3 (E4) Pressed! Touch Read: 9',
      '[AUDIO] Polyphonic chord output active (C4 + E4)',
      '[TOUCH] Key Released. Sound fading...',
      '[SYSTEM] Sensor polling steady at 1000 Hz',
    ],
    pinout: [
      { pin: 'TOUCH0 (T0)', label: 'Pencil Key C4', status: 'READING' },
      { pin: 'TOUCH2 (T2)', label: 'Pencil Key D4', status: 'READING' },
      { pin: 'TOUCH3 (T3)', label: 'Pencil Key E4', status: 'READING' },
      { pin: 'DAC1', label: 'Audio Out (Speaker)', status: 'ACTIVE' },
    ],
  },
]

export default function HardwareVisualizer() {
  const [selectedPreset, setSelectedPreset] = useState(hardwarePresets[0])
  const [activeLogIndex, setActiveLogIndex] = useState(4)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    if (!isRunning) return
    const interval = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % selectedPreset.logs.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [isRunning, selectedPreset])

  return (
    <div className="glass-strong rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-dark-700/60 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-dark-200/40 dark:border-dark-700/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center text-white shadow-md">
            <FaMicrochip className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-dark-900 dark:text-dark-50 text-lg sm:text-xl">
              ESP32 Live Serial Monitor Simulator
            </h3>
            <p className="text-xs text-dark-500 dark:text-dark-400">
              Interactive Hardware Telemetry & Pin Output
            </p>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-2 bg-dark-100 dark:bg-dark-900 p-1.5 rounded-2xl border border-dark-200/50 dark:border-dark-700/50">
          {hardwarePresets.map((preset) => {
            const Icon = preset.icon
            const isActive = selectedPreset.id === preset.id
            return (
              <button
                key={preset.id}
                onClick={() => {
                  setSelectedPreset(preset)
                  setActiveLogIndex(2)
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-500 to-emerald-500 text-white shadow-md'
                    : 'text-dark-600 dark:text-dark-400 hover:text-brand-500'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{preset.id === 'chatroom' ? 'ESP32 Chatroom' : 'Pencil Piano'}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid: Pinout Diagram & Serial Terminal */}
      <div className="grid md:grid-cols-12 gap-6 items-start">
        {/* Pinout Badges */}
        <div className="md:col-span-5 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-dark-500 dark:text-dark-400 flex items-center gap-2">
            <FaMicrochip className="w-4 h-4 text-emerald-500" /> Active Board Pins
          </h4>
          <div className="space-y-2">
            {selectedPreset.pinout.map((pin) => (
              <div
                key={pin.pin}
                className="flex items-center justify-between p-3 rounded-2xl glass border border-dark-200/40 dark:border-dark-700/40 text-xs"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono font-bold text-dark-900 dark:text-dark-100">{pin.pin}</span>
                </div>
                <span className="text-dark-500 dark:text-dark-400">{pin.label}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  {pin.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Serial Terminal View */}
        <div className="md:col-span-7 bg-dark-950 rounded-2xl p-4 border border-dark-800 font-mono text-xs text-dark-200 space-y-3 shadow-inner">
          <div className="flex items-center justify-between pb-2 border-b border-dark-800 text-dark-400">
            <div className="flex items-center gap-2">
              <FaTerminal className="w-3.5 h-3.5 text-brand-500" />
              <span>COM4 @ {selectedPreset.baudRate} baud</span>
            </div>
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="text-xs text-dark-400 hover:text-brand-400 flex items-center gap-1 cursor-pointer"
            >
              {isRunning ? <FaPause className="w-3 h-3 text-amber-500" /> : <FaPlay className="w-3 h-3 text-emerald-500" />}
              <span>{isRunning ? 'Pause' : 'Resume'}</span>
            </button>
          </div>

          <div className="space-y-1.5 h-44 overflow-y-auto pr-2">
            {selectedPreset.logs.slice(0, activeLogIndex + 1).map((log, index) => (
              <motion.div
                key={log + index}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className={`leading-relaxed ${
                  log.includes('TOUCH') || log.includes('MSG')
                    ? 'text-emerald-400 font-bold'
                    : log.includes('WIFI') || log.includes('WS')
                    ? 'text-brand-400'
                    : 'text-dark-400'
                }`}
              >
                {log}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
