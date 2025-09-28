"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Arena() {
    const [roomCode, setRoomCode] = useState("");
    const [roomName, setRoomName] = useState("");
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isJoining, setIsJoining] = useState(false);

    const handleCreateRoom = () => {
        if (!showCreateForm) {
            setShowCreateForm(true);
            return;
        }

        if (!roomName.trim()) return;
        
        setIsCreating(true);
        // Add your room creation logic here
        setTimeout(() => {
            setIsCreating(false);
            // Reset form after creation
            setRoomName("");
            setShowCreateForm(false);
        }, 1000); // Simulate API call
    };

    const handleCancelCreate = () => {
        setShowCreateForm(false);
        setRoomName("");
    };

    const handleJoinRoom = () => {
        if (!roomCode.trim()) return;
        setIsJoining(true);
        // Add your room joining logic here
        setTimeout(() => setIsJoining(false), 1000); // Simulate API call
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg 
                            width="32" 
                            height="32" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Join the Arena
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Create a new room or join an existing one to start drawing together
                    </p>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
                    {/* Create Room Section */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                            Start a New Session
                        </h2>
                        
                        {!showCreateForm ? (
                            <Button 
                                onClick={handleCreateRoom}
                                className="w-full h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all duration-200"
                            >
                                Create Room
                            </Button>
                        ) : (
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="roomName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Room Name
                                    </label>
                                    <Input
                                        id="roomName"
                                        type="text"
                                        placeholder="Enter room name"
                                        value={roomName}
                                        onChange={(e) => setRoomName(e.target.value)}
                                        className="w-full h-12 rounded-xl border-gray-300 focus:border-gray-800 focus:ring-gray-800/20 transition-all duration-200"
                                        autoFocus
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <Button 
                                        onClick={handleCancelCreate}
                                        variant="outline"
                                        className="flex-1 h-12 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-all duration-200"
                                    >
                                        Cancel
                                    </Button>
                                    <Button 
                                        onClick={handleCreateRoom}
                                        disabled={isCreating || !roomName.trim()}
                                        className="flex-1 h-12 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50"
                                    >
                                        {isCreating ? (
                                            <div className="flex items-center justify-center">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                                Creating...
                                            </div>
                                        ) : (
                                            "Create"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or</span>
                        </div>
                    </div>

                    {/* Join Room Section */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                            Join Existing Room
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="roomCode" className="block text-sm font-medium text-gray-700 mb-2">
                                    Room Code
                                </label>
                                <Input
                                    id="roomCode"
                                    type="text"
                                    placeholder="Enter room code"
                                    value={roomCode}
                                    onChange={(e) => setRoomCode(e.target.value)}
                                    className="w-full h-12 rounded-xl border-gray-300 focus:border-gray-800 focus:ring-gray-800/20 transition-all duration-200"
                                />
                            </div>
                            <Button 
                                onClick={handleJoinRoom}
                                disabled={isJoining || !roomCode.trim()}
                                variant="outline"
                                className="w-full h-12 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-xl font-medium transition-all duration-200 disabled:opacity-50"
                            >
                                {isJoining ? (
                                    <div className="flex items-center justify-center">
                                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                                        Joining Room...
                                    </div>
                                ) : (
                                    "Join Room"
                                )}
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-6">
                    <p className="text-xs text-gray-500">
                        Need help? Check our{" "}
                        <a href="#" className="text-gray-800 hover:underline">
                            guide
                        </a>{" "}
                        for getting started
                    </p>
                </div>
            </div>
        </div>
    );
}